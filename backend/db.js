const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://bhavyagg90:1234@cluster0.rilcgx2.mongodb.net/GoFoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const food_category = await mongoose.connection.db.collection(
      "food_category"
    );
    const catData = await food_category.find({}).toArray();

    global.food_items = data;
    global.food_category = catData;
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoDB;
