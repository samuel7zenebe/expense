const sportBetRouter = require("express").Router();
const {
  allsportBets,
  addsportBet,
  retrievesportBet,
  updatesportBet,
  deletesportBet,
  deletesportBets,
} = require("../controllers/sportBet.controller");

sportBetRouter.get("/", allsportBets);
sportBetRouter.get("/:sportBetId", retrievesportBet);
sportBetRouter.post("/", addsportBet);
sportBetRouter.put("/:sportBetId", updatesportBet);
sportBetRouter.delete("/", deletesportBets);
sportBetRouter.delete("/:sportBetId", deletesportBet);
module.exports = sportBetRouter;
