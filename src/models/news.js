import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Number,
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
        type: Number,
        default: null
    }
}, {
    versionKey: false
}, { collection: 'news' });

export const News = mongoose.model('News', newsSchema);

