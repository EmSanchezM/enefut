import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Notices
import { 
    createNoticeHandler, 
    deleteNoticeHandler, 
    findNoticeHandler, 
    findNoticesHandler, 
    updateNoticeHandler 
} from '../controller/notice.controller';

import { 
    createNoticeSchema, 
    deleteNoticeSchema, 
    getNoticeSchema, 
    updateNoticeSchema 
} from '../schema/notice.schema';

const router = Router();

// Notices routes
router.get('/api/notices', findNoticesHandler);
router.get('/api/notices/:noticeId', validateResource(getNoticeSchema), findNoticeHandler);
router.post('/api/notices', validateResource(createNoticeSchema), createNoticeHandler);
router.put('/api/notices/:noticeId', validateResource(updateNoticeSchema), updateNoticeHandler);
router.delete('/api/notices/:noticeId', validateResource(deleteNoticeSchema), deleteNoticeHandler);

export default router;