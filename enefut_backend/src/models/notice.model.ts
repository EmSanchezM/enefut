import mongoose from 'mongoose';
import { ClassDocument } from './classes.model';
import { LicenseDocument } from './license.model';

export interface NoticeDocument extends mongoose.Document {
    section: string;
    title: string;
    description: string; 
    dateInit: Date | string;
    dateEnd: Date | string;
    type: string;
    license: LicenseDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const noticeSchema = new mongoose.Schema({
    section: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String},
    dateInit: { type: Date, default: Date.now },
    dateEnd: { type: Date, default: Date.now },
    license: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'License'
    },
    type: { type: String }
},{
    timestamps: true,
    versionKey: false
});

const Notice = mongoose.model<NoticeDocument>('Notice', noticeSchema);

export default Notice;