import { isNull, omit } from 'lodash';
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'; 
import User, { UserDocument } from '../models/user.model';

export async function createTeacher(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>){
    try {
        const teacher = await User.create(input);
        return omit(teacher.toJSON(), 'password');
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findTeachers(){
    try {
        const teachers = await User.find({ rol: 'TEACHER' }).select('-password');
        return teachers;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findTeacher(
    teacherId: string 
){
    try {
        const teacher = await User.findById(teacherId).select('-password').where({ rol: 'TEACHER' });
        return teacher;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateTeacher(teacherId: string, teacherUpdate: UpdateQuery<UserDocument>){
    try {
        const teacher = User.findByIdAndUpdate(teacherId, teacherUpdate);
        return teacher;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteTeacher(teacherId: string){
    try {
        return User.findByIdAndDelete(teacherId);
    } catch (error: any) {
        throw new Error(error);
    }
}