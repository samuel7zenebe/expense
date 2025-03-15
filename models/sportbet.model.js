const mongoose = require("mongoose");

const SportBetSchema = new mongoose.Schema({
  amount: Number,
  timestmp: Date,
});

const SportBetModel = mongoose.model("SportBet", SportBetSchema);

module.exports = LoanModel;
