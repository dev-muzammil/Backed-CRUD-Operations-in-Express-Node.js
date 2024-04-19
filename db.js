import mongoose from "mongoose";

const URI = ""

export const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Db connection successful")
    } catch (error) {
        console.log("Db connection failed")
    }
}