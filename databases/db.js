import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/assignment_db");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export default connectionDB;