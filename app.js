const express = require("express");
const app = express();

middleware = (req, res, next) => {
  console.log("This is middleware");
  next();
};

app.get("/", (req, res) => {
  console.log("Hello this is the home page");
  res.send("Hello this is the home page");
});

app.listen(3000, () => {
  console.log("Port no: 3000 is running");
});
