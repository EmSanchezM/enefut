import { Request, Response } from 'express';
import logger from '../utils/logger';

import { CreateClassInput, DeleteClassInput, ReadClassInput, UpdateClassInput } from '../schema/class.schema';
import { createClass, findClass, findClasses, updateClass, deleteClass } from '../services/class.service';

export async function createClassHandler(req: Request<{}, {}, CreateClassInput["body"]>, res: Response){
    try {
        const classe = await createClass(req.body);
        return res.status(201).json({
            ok: true,
            message: 'Class created succesfully',
            classe
        });
    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findClasesHandler(req: Request, res: Response){
    try {
        const classes = await findClasses();
        return res.status(200).json({
            ok: true,
            classes
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findClassHandler(req: Request<ReadClassInput['params']>, res: Response){
    try {
        const classId = req.params.classId;

        const classe = await findClass(classId);

        if(!classe){
            return res.status(404).json({
                ok: false,
                message: 'Class not found'
            });
        }

        return res.status(200).json({
            ok: true,
            classe
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export function updateTeacherHandler(req: Request, res: Response){
    try {
        const teacherId = req.params.teacherId;
        
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });
    }
}

export async function updateClassHandler(
    req: Request<UpdateClassInput['params']>,
    res: Response
){
    try {
        const classId = req.params.classId;
        const classe = await findClass(classId);
        
        if(!classe){
            return res.status(404).json({
                ok: false,
                message: 'Class not found'
            });
        }

        await updateClass(classId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Class updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteClassHandler(
    req: Request<DeleteClassInput['params']>,
    res: Response 
){
    try {
        const classId = req.params.classId;
        const classe = await findClass(classId);

        if(!classe){
            return res.status(404).json({
                ok: false,
                message: 'Class not found'
            });
        }

       await deleteClass(classe._id);

        return res.status(200).json({
            ok: true, 
            message: 'Class deleted successfully',
            class: classe
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
