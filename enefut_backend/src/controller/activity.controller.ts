import { Request, Response } from 'express';
import logger from '../utils/logger';

import { 
    CreateActivityInput, 
    DeleteActivityInput, 
    ReadActivityInput, 
    UpdateActivityInput 
} from '../schema/activity.schema';

import { 
    createActivity, 
    deleteActivity, 
    findActivities, 
    findActivity, 
    updateActivity 
} from '../services/activity.service';

export async function createActivityHandler(req: Request<{}, {}, CreateActivityInput["body"]>, res: Response){
    try {
        const activity = await createActivity(req.body);

        return res.status(201).json({
            ok: true,
            message: 'Activity created succesfully',
            activity
        });

    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findActivitiesHandler(req: Request, res: Response){
    try {
        const activities = await findActivities();
        return res.status(200).json({
            ok: true,
            activities
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findActivityHandler(req: Request<ReadActivityInput['params']>, res: Response){
    try {
        const activityId = req.params.activityId;

        const activity = await findActivity(activityId);

        if(!activity){
            return res.status(404).json({
                ok: false,
                message: 'Activity not found'
            });
        }

        return res.status(200).json({
            ok: true,
            activity
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateActivityHandler(
    req: Request<UpdateActivityInput['params']>,
    res: Response
){
    try {
        const activityId = req.params.activityId;
        const activity = await findActivity(activityId);
        
        if(!activity){
            return res.status(404).json({
                ok: false,
                message: 'Activity not found'
            });
        }

        await updateActivity(activityId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Activity updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteActivityHandler(
    req: Request<DeleteActivityInput['params']>,
    res: Response 
){
    try {
        const activityId = req.params.activityId;
        const activity = await findActivity(activityId);

        if(!activity){
            return res.status(404).json({
                ok: false,
                message: 'Activity not found'
            });
        }

       await deleteActivity(activity._id);

        return res.status(200).json({
            ok: true, 
            message: 'Activity deleted successfully',
            activity
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
