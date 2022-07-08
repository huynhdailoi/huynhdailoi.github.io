const mongoose = require("mongoose");

const authShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let Auth = mongoose.model("Auth", authShema);

module.exports = { Auth };
