import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/gallery";
// i removed the mongodb connection uri to commit this ticket but it is working
// (i guess i will figure it out in next one with dotenv)

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
}
