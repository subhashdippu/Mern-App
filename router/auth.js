const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello this is the home page");
  res.send("Hello this is the home page");
});

app.get("/about", middleware, (req, res) => {
  console.log("Hello this is the about page");
  res.send("Hello this is the about page");
});

app.post("/register", middleware, (req, res) => {
  console.log("Hello this is the about page");
  res.json({ message: req.body });
});
module.exports = app;
