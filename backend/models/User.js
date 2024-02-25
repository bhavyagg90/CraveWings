const { Password } = require("@mui/icons-material");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default:Date.now
  }
});

module.exports = mongoose.model('use', UserSchema)