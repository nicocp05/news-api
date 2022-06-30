import { Schema, model } from 'mongoose';

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    archiveDate: {
        type: Date,
        default: undefined
    }
}, {
    versionKey: false
}, { collection: 'news' });

export const News = model('News', newsSchema);