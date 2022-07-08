const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  bills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Detail bill",
  },
});

let Product = mongoose.model("Product", productShema);

module.exports = { Product };
