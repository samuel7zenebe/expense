const ExpenseRouter = require("express").Router();
const {
  allExpenses,
  addExpense,
  retrieveExpense,
  updateExpense,
  deleteExpense,
  deleteExpenses,
} = require("../controllers/Expense.controller");

ExpenseRouter.get("/", allExpenses);
ExpenseRouter.get("/:ExpenseId", retrieveExpense);
ExpenseRouter.post("/", addExpense);
ExpenseRouter.put("/:ExpenseId", updateExpense);
ExpenseRouter.delete("/", deleteExpenses);
ExpenseRouter.delete("/:ExpenseId", deleteExpense);
module.exports = ExpenseRouter;
