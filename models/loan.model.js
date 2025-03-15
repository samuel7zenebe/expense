const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date,
  type: String,
  repaid: {
    status: Boolean,
    partialy_returned: [
      {
        amount: Number,
        date: Date,
      },
    ],
  },
});

const LoanModel = mongoose.model("Loan", LoanSchema);

module.exports = LoanModel;
