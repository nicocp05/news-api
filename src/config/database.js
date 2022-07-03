import mongoose from 'mongoose';

export const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Database is connected');
        
    } catch (error) {
        console.log(error);
    }

}