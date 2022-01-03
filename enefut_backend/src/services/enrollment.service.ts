import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Enrollment, { EnrollmentDocument } from '../models/enrollment.model';

export async function createEnrollment(input: DocumentDefinition<Omit<EnrollmentDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Enrollment.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findEnrollments(){
    try {
        const enrollments = await Enrollment.find()
                                        .populate('student', '-password')
                                        .populate('license');
                                        
        return enrollments;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findEnrollment( enrollmentId: string ){
    try {
        const enrollment = await Enrollment.findById(enrollmentId);
        return enrollment;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateEnrollment(enrollmentId: string, enrollmentUpdate: UpdateQuery<EnrollmentDocument>){
    try {
        const enrollment = Enrollment.findByIdAndUpdate(enrollmentId, enrollmentUpdate);
        return enrollment;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteEnrollment(enrollmentId: string){
    try {
        return Enrollment.findByIdAndDelete(enrollmentId);
    } catch (error: any) {
        throw new Error(error);
    }
}