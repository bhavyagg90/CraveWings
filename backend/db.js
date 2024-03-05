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
    {
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
    }
    // global.food_items = data;
    // console.log(global.food_items);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoDB;
