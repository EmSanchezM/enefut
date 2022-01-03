import mongoose from 'mongoose';

export interface ClassDocument extends mongoose.Document {
    name: string;
    description: string;
    duration: number;
    language: string;
    modality: string;
    type: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;  
}

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number },
    language: { type: String },
    modality: { type: String },
    type: { type: String },
    isActive: { type: Boolean, default: true }
},{
    timestamps: true,
    versionKey: false
});

const Class = mongoose.model<ClassDocument>('Class', classSchema);

export default Class;