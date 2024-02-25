const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "bhavya",
      password: "123456",
      email: "gbhayav@gmail.com",
      location: "adasfae fas",
    });
    res.json({success:true});
  } catch (error) {
    console.log(error);
    res.json({success:false});

  }
});

module.exports = router;