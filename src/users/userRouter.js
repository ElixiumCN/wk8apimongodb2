const { Router } = require("express")
const userRouter = Router()
const { login, listUsers, addUser, userDeleteOne, userEdit, userDeleteMany } = require("./userController")
const { hashPassword, tokenCheck } = require("../middleware");

userRouter.get("/user/list", listUsers)

userRouter.post("/user/signup", [hashPassword], addUser);

userRouter.post("/user/login", login);

userRouter.delete("/user/delete", [tokenCheck], userDeleteOne)

userRouter.delete("/users/deleteall", [tokenCheck], userDeleteMany)

// userRouter.put("/user", userEdit)



module.exports = userRouter;