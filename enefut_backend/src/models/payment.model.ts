import mongoose from 'mongoose';
import { LicenseDocument } from './license.model';

export interface PaymentDocument extends mongoose.Document {
    title: string;
    description: string;
    value: number;
    isActive: boolean;
    license: LicenseDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const paymentSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String},
    value: { type: Number, required: true},
    isActive: { type: Boolean, default: true },
    license: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'License'
    }
},{
    timestamps: true,
    versionKey: false
});

const Payment = mongoose.model<PaymentDocument>('Payment', paymentSchema);

export default Payment;