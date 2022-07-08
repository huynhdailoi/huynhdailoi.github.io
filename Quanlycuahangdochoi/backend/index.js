const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const customerRoute = require("./routes/customer");
const supplierRoute = require("./routes/supplier");
const personnalRoute = require("./routes/personnal");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");

dotenv.config();
//connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("common"));

app.use("/v1/customers", customerRoute);
app.use("/v1/suppliers", supplierRoute);
app.use("/v1/personnals", personnalRoute);
app.use("/v1/products", productRoute);
app.use("/v1/auth", authRoute);

app.listen(8000, () => {
  console.log("Server running");
});
