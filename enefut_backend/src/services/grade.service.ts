import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Grade, { GradeDocument } from '../models/grade.model';

export async function createGrade(input: DocumentDefinition<Omit<GradeDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Grade.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findGrades(){
    try {
        const grades = await Grade.find()
                                  .populate('student', '-password')
                                  .populate('class');
        return grades;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findGrade( gradeId: string ){
    try {
        const grade = await Grade.findById(gradeId);
        return grade;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateGrade(gradeId: string, gradeUpdate: UpdateQuery<GradeDocument>){
    try {
        const grade = Grade.findByIdAndUpdate(gradeId, gradeUpdate);
        return grade;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteGrade(gradeId: string){
    try {
        return Grade.findByIdAndDelete(gradeId);
    } catch (error: any) {
        throw new Error(error);
    }
}