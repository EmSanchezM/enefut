import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import License, { LicenseDocument } from '../models/license.model';

export async function createLicense(input: DocumentDefinition<Omit<LicenseDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await License.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findLicenses(){
    try {
        const licenses = await License.find();
        return licenses;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findLicense( licenseId: string ){
    try {
        const license = await License.findById(licenseId);
        return license;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateLicense(licenseId: string, licenseUpdate: UpdateQuery<LicenseDocument>){
    try {
        const license = License.findByIdAndUpdate(licenseId, licenseUpdate);
        return license;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteLicense(licenseId: string){
    try {
        return License.findByIdAndDelete(licenseId);
    } catch (error: any) {
        throw new Error(error);
    }
}