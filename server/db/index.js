const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://root:root@cluster0.ctabcdm.mongodb.net/Orderly", {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
