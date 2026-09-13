import mongoose from "mongoose";
import { config } from "./config";

let connectionPromise: Promise<typeof mongoose> | null = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(config.databaseUrl as string)
      .then(() => {
        console.log("Connected to database");
        return mongoose;
      })
      .catch((error) => {
        connectionPromise = null;
        console.error("Failed to connect to database", error);
        throw error;
      });
  }

  return connectionPromise;
};

export default connectDB;
