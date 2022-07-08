const mongoose = require("mongoose");

const customerShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bill",
  },
});

let Customer = mongoose.model("Customer", customerShema);

module.exports = { Customer };
