import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { LicenseDocument } from './license.model';

export interface LicenseClassDocument extends mongoose.Document {
    license: LicenseDocument;
    class: ClassDocument;
    createdAt: Date;
    updatedAt: Date;  
}

const licenseClassSchema = new mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    license: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'License'
    }
},{
    timestamps: true,
    versionKey: false
});

const LicenseClass = mongoose.model<LicenseClassDocument>('LicenseClass', licenseClassSchema);

export default LicenseClass;