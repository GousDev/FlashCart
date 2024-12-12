import mongoose from "mongoose";
const connection = {};

export const connectDb = async () => {
  if (connection.isConnected) return;
  try {
    const DB_OPTIONS = {
      dbName: "FlashCart",
    };

    const db = await mongoose.connect(process.env.MONGO_URL, DB_OPTIONS);
    connection.isConnected = db.connections[0].readyState;

    console.log(" ✅ Connected successfully");
  } catch (error) {
    console.log("❌ MongoDB connection error ", error);
  }
};
