import mongoose from "mongoose";
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error: any) {
    console.log("Error connection to MongoDB:", error.message);
    process.exit(1);
  }
};
