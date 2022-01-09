import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Enrollments
import { 
    createEnrollmentHandler, 
    deleteEnrollmentHandler, 
    findEnrollmentHandler, 
    findEnrollmentsHandler, 
    updateEnrollmentHandler 
} from '../controller/enrollment.controller';

import { 
    createEnrollmentSchema, 
    deleteEnrollmentSchema, 
    getEnrollmentSchema, 
    updateEnrollmentSchema 
} from '../schema/enrollment.schema';

const router = Router();

// Enrollments routes
router.get('/api/enrollments', findEnrollmentsHandler);
router.get('/api/enrollments/:enrollmentId', validateResource(getEnrollmentSchema), findEnrollmentHandler);
router.post('/api/enrollments', validateResource(createEnrollmentSchema), createEnrollmentHandler);
router.put('/api/enrollments/:enrollmentId', validateResource(updateEnrollmentSchema), updateEnrollmentHandler);
router.delete('/api/enrollments/:enrollmentId', validateResource(deleteEnrollmentSchema), deleteEnrollmentHandler);

export default router;