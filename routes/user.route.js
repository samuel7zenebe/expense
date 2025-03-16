const { Router } = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/", allUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
