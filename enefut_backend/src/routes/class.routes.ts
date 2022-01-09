import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Classes
import { 
    createClassSchema, 
    deleteClassSchema, 
    getClassSchema, 
    updateClassSchema
} from '../schema/class.schema';

import { 
    createClassHandler, 
    deleteClassHandler, 
    findClasesHandler,
    findClassHandler,
    updateClassHandler, 
} from '../controller/class.controller';

const router = Router();

// Class routes
router.get('/api/classes', findClasesHandler);
router.get('/api/classes/:classId', validateResource(getClassSchema), findClassHandler);
router.post('/api/classes', validateResource(createClassSchema), createClassHandler);
router.put('/api/classes/:classId', validateResource(updateClassSchema), updateClassHandler);
router.delete('/api/classes/:classId', validateResource(deleteClassSchema), deleteClassHandler); 

export default router;