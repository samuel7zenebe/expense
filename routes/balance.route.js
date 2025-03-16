const BalanceRouter = require("express").Router();
const {
  allBalances,
  addBalance,
  retrieveBalance,
  updateBalance,
  deleteBalance,
  deleteBalances,
} = require("../controllers/balance.controller");

BalanceRouter.get("/", allBalances);
BalanceRouter.get("/:BalanceId", retrieveBalance);
BalanceRouter.post("/", addBalance);
BalanceRouter.put("/:BalanceId", updateBalance);
BalanceRouter.delete("/", deleteBalances);
BalanceRouter.delete("/:BalanceId", deleteBalance);
module.exports = BalanceRouter;
