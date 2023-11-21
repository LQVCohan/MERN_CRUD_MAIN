require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = mongoose
    .connect("mongodb://0.0.0.0:27017/MERN")
    .then((result) => console.log("Connected to database"))
    .catch((err) => console.log(err));
};
