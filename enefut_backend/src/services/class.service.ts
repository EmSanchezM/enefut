import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Class, { ClassDocument } from '../models/classes.model';

export async function createClass(input: DocumentDefinition<Omit<ClassDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Class.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findClasses(){
    try {
        const classes = await Class.find();
        return classes;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findClass( classId: string ){
    try {
        const classe = await Class.findById(classId);
        return classe;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateClass(classId: string, classUpdate: UpdateQuery<ClassDocument>){
    try {
        const classe = Class.findByIdAndUpdate(classId, classUpdate);
        return classe;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteClass(classId: string){
    try {
        return Class.findByIdAndDelete(classId);
    } catch (error: any) {
        throw new Error(error);
    }
}