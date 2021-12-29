import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document {
    identidad: string;
    name: string;
    lastName: string; 
    code: string;
    birth: Date | string;
    title: string;
    email: string;
    password: string;
    phone: string;
    location: string; 
    specialty: string;
    experience: string;
    type: string;
    rol: string;
    createdAt: Date;
    updatedAt: Date;  
}

const userSchema = new mongoose.Schema({
    identidad: { type: String, required:true },
    name: { type: String, required: true },
    lastName: { type: String, required: true},
    code: { type: String },
    birth: { type: Date, default: Date.now },
    title: { type: String },
    email: { type: String, required:true, unique:true },
    password: { type: String, required:true },
    phone: { type: String },
    location: {type: String },
    specialty: { type: String },
    experience: { type: String },
    type: { type: String },
    rol: { type: String }
},{
    timestamps: true,
    versionKey: false
});

userSchema.pre('save', async function (next){
    let user = this as UserDocument;

    if(!user.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean>{
    const user = this as UserDocument;
    return bcrypt.compare(candidatePassword, user.password).catch((e)=> false);
};

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;