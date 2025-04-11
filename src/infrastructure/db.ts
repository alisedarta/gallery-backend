import mongoose from "mongoose";
import { envConfig } from "../envconfig";

const MONGO_URI = envConfig.mongoUri;

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
}
