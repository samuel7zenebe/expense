const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  ExpenseType: String,
  date: Date,
  amount: Number,
});

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);

module.exports = ExpenseModel;
