import { DocumentDefinition, UpdateQuery } from 'mongoose'; 
import Attendance, { AttendanceDocument } from '../models/attendance.model';

export async function createAttendance(input: DocumentDefinition<Omit<AttendanceDocument, 'createdAt' | 'updatedAt'>>){
    try {
        return await Attendance.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
} 

export async function findAttendances(){
    try {
        const attendances = await Attendance.find()
                                            .populate('student', '-password')
                                            .populate('class')
                                            .populate('license');
        return attendances;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function findAttendance( attendanceId: string ){
    try {
        const attendance = await Attendance.findById(attendanceId);
        return attendance;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateAttendance(attendanceId: string, attendanceUpdate: UpdateQuery<AttendanceDocument>){
    try {
        const attendance = Attendance.findByIdAndUpdate(attendanceId, attendanceUpdate);
        return attendance;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteAttendance(attendanceId: string){
    try {
        return Attendance.findByIdAndDelete(attendanceId);
    } catch (error: any) {
        throw new Error(error);
    }
}