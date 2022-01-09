import { Router } from "express";
import validateResource from '../middleware/validateResource';

//Teachers
import { 
    createTeacherSchema, 
    deleteTeacherSchema, 
    getTeacherSchema, 
    updateTeacherSchema 
} from '../schema/teacher.schema';

import { 
    createTeacherHandler, 
    deleteTeacherHandler, 
    findTeacherHandler, 
    findTeachersHandler, 
    updateTeacherHandler
} from '../controller/teacher.controller';

const router = Router();

// Teacher routes
router.get('/api/teachers', findTeachersHandler);
router.get('/api/teachers/:teacherId', validateResource(getTeacherSchema), findTeacherHandler);
router.post('/api/teachers', validateResource(createTeacherSchema), createTeacherHandler);
router.put('/api/teachers/:teacherId', validateResource(updateTeacherSchema), updateTeacherHandler);
router.delete('/api/teachers/:teacherId', validateResource(deleteTeacherSchema), deleteTeacherHandler);

export default router;