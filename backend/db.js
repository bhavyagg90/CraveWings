const mongoose = require("mongoose");

const mongoURI =
  'mongodb+srv://bhavyagg90:1234@cluster0.rilcgx2.mongodb.net/?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow the error to handle it in the calling code if necessary
  }
};

module.exports = connectToMongoDB;
