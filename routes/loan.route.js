const loanRouter = require("express").Router();
const {
  allLoans,
  addLoan,
  retrieveLoan,
  updateLoan,
  deleteLoan,
  deleteLoans,
} = require("../controllers/loan.controller");

loanRouter.get("/", allLoans);
loanRouter.get("/:loanId", retrieveLoan);
loanRouter.post("/", addLoan);
loanRouter.put("/:loanId", updateLoan);
loanRouter.delete("/", deleteLoans);
loanRouter.delete("/:loanId", deleteLoan);
module.exports = loanRouter;
