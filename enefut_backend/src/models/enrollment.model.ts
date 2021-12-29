import mongoose from 'mongoose';

import { LicenseDocument } from './license.model';
import { UserDocument } from './user.model';

export interface EnrollmentDocument extends mongoose.Document {
    section: string;
    status: string;
    type: string;
    student: UserDocument['_id'];
    license: LicenseDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const enrollmentSchema = new mongoose.Schema({
    section: { type: String, required: true },
    status: { type: String},
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    license: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'License'
    },
    type: { type: String }
},{
    timestamps: true,
    versionKey: false
});

const Enrollment = mongoose.model<EnrollmentDocument>('Enrollment', enrollmentSchema);

export default Enrollment;