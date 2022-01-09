import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Grades
import { 
    createGradeHandler, 
    deleteGradeHandler, 
    findGradeHandler, 
    findGradesHandler, 
    updateGradeHandler 
} from '../controller/grade.controller';

import { 
    createGradeSchema, 
    deleteGradeSchema, 
    getGradeSchema, 
    updateGradeSchema 
} from '../schema/grade.schema';

const router = Router();

// Grades routes
router.get('/api/grades', findGradesHandler);
router.get('/api/grades/:gradeId', validateResource(getGradeSchema), findGradeHandler);
router.post('/api/grades', validateResource(createGradeSchema), createGradeHandler);
router.put('/api/grades/:gradeId', validateResource(updateGradeSchema), updateGradeHandler);
router.delete('/api/grades/:gradeId', validateResource(deleteGradeSchema), deleteGradeHandler);

export default router;