const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const db = require("./db");

const app = express();
const productRouter = require("./routes/productRouter");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

app.get("/", (req, res) => {
  res.json({ message: "welcome to Orderly" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use("/api/", productRouter);