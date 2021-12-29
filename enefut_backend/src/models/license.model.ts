import mongoose from 'mongoose';

export interface LicenseDocument extends mongoose.Document {
    name: string;
    letter: string; 
    description: string;
    duration: number;
    cost: number;
    language: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;  
}

const licenseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    letter: { type: String, required: true},
    description: { type: String },
    duration: { type: Number },
    cost: { type: Number },
    language: { type: String },
    type: { type: String }
},{
    timestamps: true,
    versionKey: false
});

const License = mongoose.model<LicenseDocument>('License', licenseSchema);

export default License;