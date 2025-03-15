const mongoose = require("mongoose");

const BalanceSchema = new mongoose.Schema({
  balanceType: String,
  date: Date,
  amount: Number,
});

const BalanceModel = mongoose.model("Balance", BalanceSchema);

module.exports = BalanceModel;
