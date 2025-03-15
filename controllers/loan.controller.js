const loanModel = require("../models/loan.model");

async function allLoans(req, res) {
  try {
    const loans = await loanModel.find({});
    res.send(loans);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function retrieveLoan(req, res) {
  const { loanId } = req.params;
  try {
    const loan = await loanModel.find({ _id: loanId });
    res.send(loan);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function addLoan(req, res) {
  try {
    const newLoan = await loanModel.insertOne(...req.body);
    res.send(newLoan);
  } catch (err) {}
}

async function updateLoan(req, res) {
  const { loanId } = req.params;
  try {
    const updatedLoan = await loanModel.updateOne(
      {
        _id: req.body.id,
      },
      {
        ...req.body,
      }
    );
    res.send(updatedLoan);
  } catch (err) {
    res.send({
      error: true,
      message: err.message,
    });
  }
}

async function deleteLoan(req, res) {
  const { loanId } = req.params;
  try {
    const loan = await loanModel.delete({ _id: loanId });
    res.send(loan);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

async function deleteLoans(req, res) {
  try {
    const loan = await loanModel.delete({});
    res.send(loan);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

module.exports = {
  addLoan,
  allLoans,
  retrieveLoan,
  updateLoan,
  deleteLoan,
  deleteLoans,
};
