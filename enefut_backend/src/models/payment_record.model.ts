import mongoose from 'mongoose';
import { PaymentDocument } from './payment.model';
import { UserDocument } from './user.model';

export interface PaymentRecordDocument extends mongoose.Document {
    datePayment: Date;
    details: string;
    value: number;
    balance: number;
    status: string;
    payment: PaymentDocument['_id'];
    user: UserDocument['_id'];
    createdAt: Date;
    updatedAt: Date;  
}

const paymentRecordSchema = new mongoose.Schema({
    datePayment: { type: Date, default: Date.now},
    details: { type: String },
    value: { type: Number, required: true },
    balance: { type: Number, required: true},
    status: { type: String},
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true,
    versionKey: false
});

const PaymentRecord = mongoose.model<PaymentRecordDocument>('PaymentRecord', paymentRecordSchema);

export default PaymentRecord;