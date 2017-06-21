var movie = require("./movie")

threeFavouriteMovies = ["Avatar", "The Matrix", "Snatch"];
threeFavouriteMovies.forEach(function(film){
  movie.get(film)
})
// movie.get("The Matrix");