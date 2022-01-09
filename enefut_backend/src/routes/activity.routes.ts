import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Activities
import { 
    createActivityHandler, 
    deleteActivityHandler, 
    findActivitiesHandler, 
    findActivityHandler, 
    updateActivityHandler 
} from '../controller/activity.controller';

import { 
    createActivitySchema, 
    deleteActivitySchema, 
    getActivitySchema, 
    updateActivitySchema 
} from '../schema/activity.schema';

const router = Router();

// Activity routes
router.get('/api/activities', findActivitiesHandler);
router.get('/api/activities/:activityId', validateResource(getActivitySchema), findActivityHandler);
router.post('/api/activities', validateResource(createActivitySchema), createActivityHandler);
router.put('/api/activities/:activityId', validateResource(updateActivitySchema), updateActivityHandler);
router.delete('/api/activities/:activityId', validateResource(deleteActivitySchema), deleteActivityHandler);

export default router;