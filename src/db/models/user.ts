import { Schema, model } from 'mongoose';

const schema: Schema = new Schema({
    _id: String,
    registration_date: String,
    name: String,
    email: String,
    password: String,
    skills: [
        {
            name: String,
            level: {
                type: Number,
                min: 1,
                max: 5,
            }
        }
    ]
});

export const UserModel = model('User', schema);
