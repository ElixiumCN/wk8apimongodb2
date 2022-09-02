const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPassword } = require("../middleware");

const userRouter = Router();

userRouter.post("/user/signup", [hashPassword], addUser);
userRouter.post("/user/login", login);

module.exports = userRouter;
