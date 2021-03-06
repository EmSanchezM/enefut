import { Request, Response } from 'express';
import logger from '../utils/logger';
import { nanoid } from "nanoid";

import { 
    createStudent, 
    deleteStudent, 
    findStudent, 
    findStudents, 
    updateStudent 
} from '../services/student.service';

import { 
    CreateStudentInput, 
    DeleteStudentInput, 
    ReadStudentInput, 
    UpdateStudentInput 
} from '../schema/student.schema';

export async function createStudentHandler(req: Request<{}, {}, CreateStudentInput["body"]>, res: Response){
    try {
        
        const studentSave = {
            ...req.body,
            code: 'STUDENT-'+ nanoid(),
            rol: 'STUDENT',
            isActive: true,
        }

        const student = await createStudent(studentSave);
        return res.status(201).json({
            ok: true,
            message: 'Student created succesfully',
            data: student
        });
    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message
        });
    }
}

export async function findStudentsHandler(req: Request, res: Response){
    try {
        const students = await findStudents();
        return res.status(200).json({
            ok: true,
            data: students
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findStudentHandler(req: Request<ReadStudentInput['params']>, res: Response){
    try {
        const studentId = req.params.studentId;

        const student = await findStudent(studentId);

        if(!student){
            return res.status(404).json({
                ok: false,
                message: 'Student not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: student
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateStudentHandler(
    req: Request<UpdateStudentInput['params']>,
    res: Response
){
    try {
        const studentId = req.params.studentId;
        const student = await findStudent(studentId);
        
        if(!student){
            return res.status(404).json({
                ok: false,
                message: 'Student not found'
            });
        }

        await updateStudent(studentId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Student updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteStudentHandler(
    req: Request<DeleteStudentInput['params']>,
    res: Response 
){
    try {
        const studentId = req.params.studentId;
        const student = await findStudent(studentId);

        if(!student){
            return res.status(404).json({
                ok: false,
                message: 'Student not found'
            });
        }

       await deleteStudent(student._id);

        return res.status(200).json({
            ok: true, 
            message: 'Teacher deleted successfully',
            data: student
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}