import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Attendances
import { 
    createAttendanceHandler, 
    deleteAttendanceHandler, 
    findAttendanceHandler, 
    findAttendancesHandler, 
    updateAttendanceHandler
} from '../controller/attendance.controller';

import { 
    createAttendanceSchema, 
    deleteAttendanceSchema, 
    getAttendanceSchema, 
    updateAttendanceSchema
} from '../schema/attendance.schema';

const router = Router();

// Attendances routes
router.get('/api/attendances', findAttendancesHandler);
router.get('/api/attendances/:attendanceId', validateResource(getAttendanceSchema), findAttendanceHandler);
router.post('/api/attendances', validateResource(createAttendanceSchema), createAttendanceHandler);
router.put('/api/attendances/:attendanceId', validateResource(updateAttendanceSchema), updateAttendanceHandler);
router.delete('/api/attendances/:attendanceId', validateResource(deleteAttendanceSchema), deleteAttendanceHandler);

export default router;