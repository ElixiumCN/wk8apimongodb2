const { Router } = require("express")
const userRouter = Router()
const { login, listUsers, addUser, userDeleteOne, userEdit, userDeleteMany } = require("./userController")
const { hashPassword } = require("../middleware");

userRouter.get("/user", listUsers)

userRouter.post("/user", addUser)

userRouter.delete("/user", userDeleteOne)

userRouter.delete("/users", userDeleteMany)

userRouter.put("/user", userEdit)

userRouter.post("/user/signup", [hashPassword], addUser);

userRouter.post("/user/login", login);

module.exports = userRouter;