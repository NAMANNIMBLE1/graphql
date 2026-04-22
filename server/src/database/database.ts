import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const connectDB = async (uri: string) => {
    try {
        await mongoose.connect(uri)
        console.log("db connected")
    } catch (error) {
        console.log("db cant connect", error)
    }
}

export { connectDB};