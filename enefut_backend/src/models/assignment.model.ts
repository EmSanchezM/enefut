import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { UserDocument } from './user.model';

export interface AssignmentDocument extends mongoose.Document {
    teacher: UserDocument['_id'];
    class: ClassDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const assignmentSchema = new mongoose.Schema({
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

const Assignment = mongoose.model<AssignmentDocument>('Assignment', assignmentSchema);

export default Assignment;