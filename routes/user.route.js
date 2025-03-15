const { Router } = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/api/users", allUsers);

module.exports = userRouter;
