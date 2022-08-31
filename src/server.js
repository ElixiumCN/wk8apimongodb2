require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const movieRouter = require("./movie/movieRouter")
const userRouter = require("./users/userRouter")

app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});