import { Request, Response } from 'express';
import logger from '../utils/logger';

import { 
    CreateEnrollmentInput, 
    DeleteEnrollmentInput, 
    ReadEnrollmentInput, 
    UpdateEnrollmentInput 
} from '../schema/enrollment.schema';

import { 
    createEnrollment, 
    deleteEnrollment, 
    findEnrollment, 
    findEnrollments, 
    updateEnrollment 
} from '../services/enrollment.service';

export async function createEnrollmentHandler(req: Request<{}, {}, CreateEnrollmentInput["body"]>, res: Response){
    try {
        const enrollment = await createEnrollment(req.body);

        return res.status(201).json({
            ok: true,
            message: 'Enrollment created succesfully',
            data: enrollment
        });

    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findEnrollmentsHandler(req: Request, res: Response){
    try {
        const enrollments = await findEnrollments();
        return res.status(200).json({
            ok: true,
            data: enrollments
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findEnrollmentHandler(req: Request<ReadEnrollmentInput['params']>, res: Response){
    try {
        const enrollmentId = req.params.enrollmentId;

        const enrollment = await findEnrollment(enrollmentId);

        if(!enrollment){
            return res.status(404).json({
                ok: false,
                message: 'Enrollment not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: enrollment
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateEnrollmentHandler(
    req: Request<UpdateEnrollmentInput['params']>,
    res: Response
){
    try {
        const enrollmentId = req.params.enrollmentId;
        const enrollment = await findEnrollment(enrollmentId);
        
        if(!enrollment){
            return res.status(404).json({
                ok: false,
                message: 'Enrollment not found'
            });
        }

        await updateEnrollment(enrollmentId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Enrollment updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteEnrollmentHandler(
    req: Request<DeleteEnrollmentInput['params']>,
    res: Response 
){
    try {
        const enrollmentId = req.params.enrollmentId;
        const enrollment = await findEnrollment(enrollmentId);

        if(!enrollment){
            return res.status(404).json({
                ok: false,
                message: 'Enrollment not found'
            });
        }

       await deleteEnrollment(enrollment._id);

        return res.status(200).json({
            ok: true, 
            message: 'Enrollment deleted successfully',
            data: enrollment 
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
