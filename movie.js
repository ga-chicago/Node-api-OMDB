var axios = require('axios')

module.exports.get = function(movieTitle) {
	axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=5387d14d")
  .then(function (response) {
  	var movie = response
    console.log("The actors in " + movie.data.Title + " are " + movie.data.Actors);
  })
  .catch(function (error) {
    console.log(error);
  });
}