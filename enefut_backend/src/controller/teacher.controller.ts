import { Request, Response } from 'express';
import logger from '../utils/logger';
import { nanoid } from "nanoid";

import { 
    CreateTeacherInput, 
    DeleteTeacherInput, 
    ReadTeacherInput, 
    UpdateTeacherInput 
} from '../schema/teacher.schema';

import { 
    createTeacher, 
    deleteTeacher, 
    findTeacher, 
    findTeachers, 
    updateTeacher 
} from '../services/teacher.service';

export async function createTeacherHandler(req: Request<{}, {}, CreateTeacherInput["body"]>, res: Response){
    try {
        const teacherSave = {
            ...req.body,
            code: 'TEACHER-'+ nanoid(),
            rol: 'TEACHER',
            isActive: true,
        }

        const teacher = await createTeacher(teacherSave);

        return res.status(201).json({
            ok: true,
            message: 'Teacher created succesfully',
            data: teacher
        });
    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message
        });
    }
}

export async function findTeachersHandler(req: Request, res: Response){
    try {
        const teachers = await findTeachers();
        return res.status(200).json({
            ok: true,
            data: teachers
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findTeacherHandler(req: Request<ReadTeacherInput['params']>, res: Response){
    try {
        const teacherId = req.params.teacherId;

        const teacher = await findTeacher(teacherId);

        if(!teacher){
            return res.status(404).json({
                ok: false,
                message: 'Teacher not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: teacher
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateTeacherHandler(
    req: Request<UpdateTeacherInput['params']>,
    res: Response
){
    try {
        const teacherId = req.params.teacherId;
        const teacher = await findTeacher(teacherId);
        
        if(!teacher){
            return res.status(404).json({
                ok: false,
                message: 'Teacher not found'
            });
        }

        await updateTeacher(teacherId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Teacher updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteTeacherHandler(
    req: Request<DeleteTeacherInput['params']>,
    res: Response 
){
    try {
        const teacherId = req.params.teacherId;
        const teacher = await findTeacher(teacherId);

        if(!teacher){
            return res.status(404).json({
                ok: false,
                message: 'Teacher not found'
            });
        }

       await deleteTeacher(teacher._id);

        return res.status(200).json({
            ok: true, 
            message: 'Teacher deleted successfully',
            data: teacher
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}