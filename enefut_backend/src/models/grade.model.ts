import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { UserDocument } from './user.model';

export interface GradeDocument extends mongoose.Document {
    cumulative: number; 
    quiz: number;
    type: string;
    average: number;
    obs: string;
    isActive: boolean;
    student: UserDocument['_id'],
    class: ClassDocument['_id'],
    createdAt: Date;
    updatedAt: Date;  
}

const gradeSchema = new mongoose.Schema({
    cumulative: { type: Number },
    quiz: { type: Number },
    average: { type: Number },
    type: { type: String, required: true },
    obs: { type: String },
    isActive: { type: Boolean, default: true },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
},{
    timestamps: true,
    versionKey: false
});

const Grade = mongoose.model<GradeDocument>('Grade', gradeSchema);

export default Grade;