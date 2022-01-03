import { Request, Response } from 'express';
import logger from '../utils/logger';
import { 
    CreateNoticeInput, 
    DeleteNoticeInput, 
    ReadNoticeInput, 
    UpdateNoticeInput 
} from '../schema/notice.schema';

import { 
    createNotice, 
    deleteNotice, 
    findNotice, 
    findNotices, 
    updateNotice 
} from '../services/notice.service';

export async function createNoticeHandler(req: Request<{}, {}, CreateNoticeInput["body"]>, res: Response){
    try {
        const notice = await createNotice(req.body);

        return res.status(201).json({
            ok: true,
            message: 'Notice created succesfully',
            data: notice
        });

    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: true,
            message: error.message
        });
    }
}

export async function findNoticesHandler(req: Request, res: Response){
    try {
        const notices = await findNotices();
        return res.status(200).json({
            ok: true,
            data: notices
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findNoticeHandler(req: Request<ReadNoticeInput['params']>, res: Response){
    try {
        const noticeId = req.params.noticeId;

        const notice = await findNotice(noticeId);

        if(!notice){
            return res.status(404).json({
                ok: false,
                message: 'Notice not found'
            });
        }

        return res.status(200).json({
            ok: true,
            data: notice
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateNoticeHandler(
    req: Request<UpdateNoticeInput['params']>,
    res: Response
){
    try {
        const noticeId = req.params.noticeId;
        const notice = await findNotice(noticeId);
        
        if(!notice){
            return res.status(404).json({
                ok: false,
                message: 'Notice not found'
            });
        }

        await updateNotice(noticeId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'Notice updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteNoticeHandler(
    req: Request<DeleteNoticeInput['params']>,
    res: Response 
){
    try {
        const noticeId = req.params.noticeId;
        const notice = await findNotice(noticeId);

        if(!notice){
            return res.status(404).json({
                ok: false,
                message: 'Notice not found'
            });
        }

       await deleteNotice(notice._id);

        return res.status(200).json({
            ok: true, 
            message: 'Notice deleted successfully',
            data: notice
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}
