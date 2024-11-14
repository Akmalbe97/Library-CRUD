const mongoose = require("mongoose")
mongoose.connection.setMaxListeners(20);
require ("dotenv").config()

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Connected db");
  } catch (error) {
    console.error("failed:", error.message);
    throw error;
  }
}

module.exports = connectDB;
