import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Notice, { NoticeDocument } from '../models/notice.model';

export async function createNotice(input: DocumentDefinition<Omit<NoticeDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Notice.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findNotices(){
    try {
        const notices = await Notice.find().populate('license');
        return notices;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findNotice( noticeId: string ){
    try {
        const notice = await Notice.findById(noticeId);
        return notice;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateNotice(noticeId: string, noticeUpdate: UpdateQuery<NoticeDocument>){
    try {
        const notice = Notice.findByIdAndUpdate(noticeId, noticeUpdate);
        return notice;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteNotice(noticeId: string){
    try {
        return Notice.findByIdAndDelete(noticeId);
    } catch (error: any) {
        throw new Error(error);
    }
}