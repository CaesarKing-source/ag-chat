import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const instance = await mongoose.connect(process.env.mongoURL);
        console.log('Connected to MongoDB', instance.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}