import { Request, Response } from 'express';
import logger from '../utils/logger';

import { 
    CreateAttendanceInput, 
    DeleteAttendanceInput, 
    ReadAttendanceInput, 
    UpdateAttendanceInput
} from '../schema/attendance.schema';

import { 
    createAttendance, 
    deleteAttendance, 
    findAttendance, 
    findAttendances, 
    updateAttendance
} from '../services/attendance.service';

export async function createAttendanceHandler(req: Request<{}, {}, CreateAttendanceInput["body"]>, res: Response){
    try {
        const attendance = await createAttendance(req.body);

        return res.status(201).json({
            ok: true,
            message: 'Attendance created succesfully',
            data: attendance
        });

    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findAttendancesHandler(req: Request, res: Response){
    try {
        const attendances = await findAttendances();
        return res.status(200).json({
            ok: true,
            data: attendances
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findAttendanceHandler(req: Request<ReadAttendanceInput['params']>, res: Response){
    try {
        const attendanceId = req.params.attendanceId;

        const attendance = await findAttendance(attendanceId);

        if(!attendance){
            return res.status(404).json({
                ok: false,
                message: 'Attendance not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: attendance
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateAttendanceHandler(
    req: Request<UpdateAttendanceInput['params']>,
    res: Response
){
    try {
        const attendanceId = req.params.attendanceId;
        const attendance = await findAttendance(attendanceId);
        
        if(!attendance){
            return res.status(404).json({
                ok: false,
                message: 'Activity not found'
            });
        }

        await updateAttendance(attendanceId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Attendance updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteAttendanceHandler(
    req: Request<DeleteAttendanceInput['params']>,
    res: Response 
){
    try {
        const attendanceId = req.params.attendanceId;
        const attendance = await findAttendance(attendanceId);

        if(!attendance){
            return res.status(404).json({
                ok: false,
                message: 'Attendance not found'
            });
        }

       await deleteAttendance(attendance._id);

        return res.status(200).json({
            ok: true, 
            message: 'Attendance deleted successfully',
            data: attendance
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
