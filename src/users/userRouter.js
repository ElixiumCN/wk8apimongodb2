const { Router } = require("express")
const userRouter = Router()
const { listUsers, addUser, userDeleteOne, userEdit, userDeleteMany } = require("../utils/userController")

userRouter.get("/user", listUsers)

userRouter.post("/user", addUser)

userRouter.delete("/user", userDeleteOne)

userRouter.delete("/users", userDeleteMany)

userRouter.put("/user", userEdit)

module.exports = userRouter;