const mongoose = require("mongoose");

const supplierShema = new mongoose.Schema({
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

let Supplier = mongoose.model("Supplier", supplierShema);

module.exports = { Supplier };
