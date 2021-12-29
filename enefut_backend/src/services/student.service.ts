import { omit } from 'lodash';
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'; 
import User, { UserDocument } from '../models/user.model';

export async function createStudent(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>){
    try {
        const user = await User.create(input);
        return omit(user.toJSON(), 'password');
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findStudents(){
    try {
        const users = await User.find({ rol: 'STUDENT' }).select('-password');
        return users;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findStudent( studentId: string ){
    try {
        const student = await User.findById(studentId).select('-password').where({ rol: 'STUDENT' });
        return student;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateStudent(studentId: string, studentUpdate: UpdateQuery<UserDocument>){
    try {
        const student = User.findByIdAndUpdate(studentId, studentUpdate);
        return student;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteStudent(studentId: string){
    try {
        return User.findByIdAndDelete(studentId);
    } catch (error: any) {
        throw new Error(error);
    }
}