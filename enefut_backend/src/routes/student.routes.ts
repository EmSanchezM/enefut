import { Router } from "express";
import validateResource from '../middleware/validateResource';

//Students
import { 
    createStudentHandler, 
    deleteStudentHandler, 
    findStudentHandler, 
    findStudentsHandler, 
    updateStudentHandler
} from '../controller/student.controller';

import { 
    createStudentSchema, 
    deleteStudentSchema, 
    getStudentSchema, 
    updateStudentSchema
} from '../schema/student.schema';

const router = Router();

// Students routes
router.get('/api/students', findStudentsHandler);
router.get('/api/students/:studentId', validateResource(getStudentSchema), findStudentHandler);
router.post('/api/students', validateResource(createStudentSchema), createStudentHandler);
router.put('/api/students/:studentId', validateResource(updateStudentSchema), updateStudentHandler);
router.delete('/api/students/:studentId', validateResource(deleteStudentSchema), deleteStudentHandler);
 
export default router;