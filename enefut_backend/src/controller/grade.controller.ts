import { Request, Response } from 'express';
import logger from '../utils/logger';

import { 
    CreateGradeInput, 
    DeleteGradeInput, 
    ReadGradeInput, 
    UpdateGradeInput 
} from '../schema/grade.schema';

import { 
    createGrade, 
    deleteGrade, 
    findGrade, 
    findGrades, 
    updateGrade 
} from '../services/grade.service';

export async function createGradeHandler(req: Request<{}, {}, CreateGradeInput["body"]>, res: Response){
    try {
        const grade = await createGrade(req.body);

        return res.status(201).json({
            ok: true,
            message: 'Grade created succesfully',
            data: grade
        });

    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findGradesHandler(req: Request, res: Response){
    try {
        const grades = await findGrades();
        return res.status(200).json({
            ok: true,
            data: grades
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findGradeHandler(req: Request<ReadGradeInput['params']>, res: Response){
    try {
        const gradeId = req.params.gradeId;

        const grade = await findGrade(gradeId);

        if(!grade){
            return res.status(404).json({
                ok: false,
                message: 'Grade not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: grade
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateGradeHandler(
    req: Request<UpdateGradeInput['params']>,
    res: Response
){
    try {
        const gradeId = req.params.gradeId;
        const grade = await findGrade(gradeId);
        
        if(!grade){
            return res.status(404).json({
                ok: false,
                message: 'Grade not found'
            });
        }

        await updateGrade(gradeId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Grade updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteGradeHandler(
    req: Request<DeleteGradeInput['params']>,
    res: Response 
){
    try {
        const gradeId = req.params.gradeId;
        const grade = await findGrade(gradeId);

        if(!grade){
            return res.status(404).json({
                ok: false,
                message: 'Grade not found'
            });
        }

       await deleteGrade(grade._id);

        return res.status(200).json({
            ok: true, 
            message: 'Grade deleted successfully',
            data: grade
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
