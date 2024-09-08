import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) {
      console.log("Already Connected");
      return;
    }

    await mongoose.connect(process.env.DB);

    isConnected = true;
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw new Error("Failed to connect to the database");
  }
};

export default connectDB;
