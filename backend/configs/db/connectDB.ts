import mongoose from "mongoose";

const db_uri = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    if (!db_uri) {
      throw new Error("db_uri is not defined");
    }
    console.log(`Connecting to DB..`);
    await mongoose.connect(db_uri, {});
    console.log("Successfully connected to database 🚀");
  } catch (error: any) {
    console.error("Error connecting to database: ", error.message);
  }
};

export default connectToDB;
