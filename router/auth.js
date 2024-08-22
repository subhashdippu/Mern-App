const express = require("express");
const app = express();

require("../db/conn");
const User = require("../model/userSchema");

app.get("/", (req, res) => {
  console.log("Hello this is the home page");
  res.send("Hello this is the home page");
});

app.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the all data" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please fill the all data" });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      res.status(422).json({ error: "User not exist" });
    } else {
      res.status(422).json({ message: "User signin successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
