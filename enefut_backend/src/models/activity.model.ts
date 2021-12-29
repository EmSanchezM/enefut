import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { UserDocument } from './user.model';

export interface ActivityDocument extends mongoose.Document {
    title: string;
    description: string; 
    value: number;
    deliveryDate: Date | string,
    type: string;
    student: UserDocument['_id'],
    class: ClassDocument['_id'],
    teacher: UserDocument['_id'],
    createdAt: Date;
    updatedAt: Date;  
}

const activitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    value: { type: Number },
    deliveryDate: { type: Date, default: Date.now },
    type: { type: String },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true,
    versionKey: false
});

const Activity = mongoose.model<ActivityDocument>('Activity', activitySchema);

export default Activity;