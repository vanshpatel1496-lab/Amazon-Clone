const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("MongoDB Connection Full Error:");
    console.error(error);

    process.exit(1);
  }
};

module.exports = connectDB;