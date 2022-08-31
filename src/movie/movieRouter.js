const { Router } = require("express")
const movieRouter = Router()
const {listMovies, addMovie, deleteMovie, deleteMovies, editMovie} = require("../utils/movieController")

movieRouter.get("/movie", listMovies);
movieRouter.post("/movie", addMovie);
movieRouter.delete("/movie", deleteMovie);
movieRouter.delete("/movies", deleteMovies);
movieRouter.put("/movie", editMovie);

module.exports = movieRouter