const mongoose = require("mongoose");

const personnalShema = new mongoose.Schema({
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
  position: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bill",
  },
});

let Personnal = mongoose.model("Personnal", personnalShema);

module.exports = { Personnal };
