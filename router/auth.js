const express = require("express");
const app = express();

require("../db/conn");
const User = require("../model/userSchema");

app.get("/", (req, res) => {
  console.log("Hello this is the home page");
  res.send("Hello this is the home page");
});

app.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the all data" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered successfully" });
        })
        .catch((err) =>
          res.status(500).json({ message: "Failed registration" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = app;
