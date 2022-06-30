import mongoose from 'mongoose';

export const dbConnection = async () => {
    
    const userDB = process.env.USER_DB;
    const passwordDB = process.env.PASSWORD_DB;
    const nameDB = process.env.NAME_DB;

    try {
        await mongoose.connect(`mongodb+srv://${userDB}:${passwordDB}@cluster0.z4flu.mongodb.net/${nameDB}`);
        console.log('Database is connected');
        
    } catch (error) {
        console.log(error);
        // throw new Error('');
    }

}