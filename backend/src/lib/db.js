import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to the database ${conn.connection.host}`);
    }
    catch (err) {
        console.error('Error connecting to the database: ', err);
    }
};
