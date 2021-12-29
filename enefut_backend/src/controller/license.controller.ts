import { Request, Response } from 'express';
import logger from '../utils/logger';

import { CreateLicenseInput, DeleteLicenseInput, ReadLicenseInput, UpdateLicenseInput } from '../schema/license.schema';
import { createLicense, findLicenses, findLicense, updateLicense, deleteLicense } from '../services/license.service';

export async function createLicenseHandler(req: Request<{}, {}, CreateLicenseInput["body"]>, res: Response){
    try {
        const license = await createLicense(req.body);
        return res.status(201).json({
            ok: true,
            message: 'License created succesfully',
            license
        });
    } catch (error : any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message
        });
    }
}

export async function findLicensesHandler(req: Request, res: Response){
    try {
        const licenses = await findLicenses();
        return res.status(200).json({
            ok: true,
            licenses
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function findLicenseHandler(req: Request<ReadLicenseInput['params']>, res: Response){
    try {
        const licenseId = req.params.licenseId;

        const license = await findLicense(licenseId);

        if(!license){
            return res.status(404).json({
                ok: false,
                message: 'License not found'
            });
        }

        return res.status(200).json({
            ok: true,
            license
        });
    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        });        
    }
}

export async function updateLicenseHandler(
    req: Request<UpdateLicenseInput['params']>,
    res: Response
){
    try {
        const licenseId = req.params.licenseId;
        const license = await findLicense(licenseId);
        
        if(!license){
            return res.status(404).json({
                ok: false,
                message: 'License not found'
            });
        }

        await updateLicense(licenseId, req.body);

        return res.status(200).json({
            ok: true,
            message: 'License updated successfully'
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}

export async function deleteLicenseHandler(
    req: Request<DeleteLicenseInput['params']>,
    res: Response 
){
    try {
        const licenseId = req.params.licenseId;
        const license = await findLicense(licenseId);

        if(!license){
            return res.status(404).json({
                ok: false,
                message: 'License not found'
            });
        }

       await deleteLicense(license._id);

        return res.status(200).json({
            ok: true, 
            message: 'License deleted successfully',
            license
        });

    } catch (error: any) {
        logger.error(error);
        return res.status(409).json({
            ok: false,
            message: error.message 
        }); 
    }
}


