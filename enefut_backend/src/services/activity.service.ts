import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Activity, { ActivityDocument } from '../models/activity.model';

export async function createActivity(input: DocumentDefinition<Omit<ActivityDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Activity.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findActivities(){
    try {
        const activities = await Activity.find()
                                        .populate('student', '-password')
                                        .populate('class')
                                        .populate('teacher', '-password');
        return activities;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findActivity( activityId: string ){
    try {
        const activity = await Activity.findById(activityId);
        return activity;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateActivity(activityId: string, activityUpdate: UpdateQuery<ActivityDocument>){
    try {
        const activity = Activity.findByIdAndUpdate(activityId, activityUpdate);
        return activity;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteActivity(activityId: string){
    try {
        return Activity.findByIdAndDelete(activityId);
    } catch (error: any) {
        throw new Error(error);
    }
}