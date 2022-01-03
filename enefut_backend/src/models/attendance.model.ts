import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { LicenseDocument } from './license.model';
import { UserDocument } from './user.model';

export interface AttendanceDocument extends mongoose.Document {
    section: string;
    date: Date | string; 
    value: number;
    observation: string;
    status: string;
    type: string;
    isActive: boolean;
    student: UserDocument['_id'];
    class: ClassDocument['_id'];
    license: LicenseDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const attendanceSchema = new mongoose.Schema({
    section: { type: String, required: true },
    date: { type: Date, default: Date.now },
    value: { type: Number },
    observation: { type: String },
    status: { type: String },
    type: { type: String },
    isActive: { type: Boolean, default: true },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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

const Attendance = mongoose.model<AttendanceDocument>('Attendance', attendanceSchema);

export default Attendance;