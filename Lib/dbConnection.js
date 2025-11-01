const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  }
};

module.exports = { dbConnection };
