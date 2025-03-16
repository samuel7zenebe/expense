const expenseModel = require("../models/expense.model");

async function allExpenses(req, res) {
  try {
    const expenses = await expenseModel.find({});
    res.send(expenses);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function retrieveExpense(req, res) {
  const { expenseId } = req.params;
  try {
    const expense = await expenseModel.find({ _id: expenseId });
    res.send(expense);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
async function addExpense(req, res) {
  try {
    const newExpense = await expenseModel.insertOne({ ...req.body });
    res.send(newExpense);
  } catch (err) {
    res.send({
      error: true,
    });
  }
}

async function updateExpense(req, res) {
  const { expenseId } = req.params;
  try {
    const updatedexpense = await expenseModel.updateOne(
      {
        _id: req.body.id,
      },
      {
        ...req.body,
      }
    );
    res.send(updatedexpense);
  } catch (err) {
    res.send({
      error: true,
      message: err.message,
    });
  }
}

async function deleteExpense(req, res) {
  const { expenseId } = req.params;
  try {
    const expense = await expenseModel.delete({ _id: expenseId });
    res.send(expense);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

async function deleteExpenses(req, res) {
  try {
    const expense = await expenseModel.delete({});
    res.send(expense);
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}

module.exports = {
  addExpense,
  allExpenses,
  retrieveExpense,
  updateExpense,
  deleteExpense,
  deleteExpenses,
};
