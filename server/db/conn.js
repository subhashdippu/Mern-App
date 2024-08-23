const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB}:${process.env.DB_PASSWORD}@cluster0.p7fag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(console.log("mongodb connected successfully"))
  .catch((error) => console.log("Error connecting to mongodb", error));
