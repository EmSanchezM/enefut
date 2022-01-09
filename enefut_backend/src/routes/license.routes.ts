import { Router } from 'express';
import validateResource from '../middleware/validateResource';

//Licenses
import { 
    createLicenseSchema, 
    deleteLicenseSchema, 
    getLicenseSchema, 
    updateLicenseSchema
} from '../schema/license.schema';

import { 
    createLicenseHandler, 
    deleteLicenseHandler, 
    findLicenseHandler, 
    findLicensesHandler, 
    updateLicenseHandler
} from '../controller/license.controller';

const router = Router();

// License routes
router.get('/api/licenses', findLicensesHandler);
router.get('/api/licenses/:licenseId', validateResource(getLicenseSchema), findLicenseHandler);
router.post('/api/licenses', validateResource(createLicenseSchema), createLicenseHandler);
router.put('/api/licenses/:licenseId', validateResource(updateLicenseSchema), updateLicenseHandler);
router.delete('/api/licenses/:licenseId', validateResource(deleteLicenseSchema), deleteLicenseHandler);

export default router;