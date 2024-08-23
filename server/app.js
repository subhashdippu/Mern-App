const express = require("express");
const app = express();

require("dotenv").config();
middleware = (req, res, next) => {
  console.log("This is middleware");
  next();
};
app.use(express.json());
require("./db/conn");

app.use(require("./router/auth"));

app.listen(3000, () => {
  console.log("Port no: 3000 is running");
});
