import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const accountSchema = new Schema ({
    id: String,
    name: String,
    camera: String,
    niche: String,
    comments:[{  type: Object}],
    upvotes: Number,
},
{timestamps: true})

export  default model('accounts', accountSchema)