// Fetches and lists the title for all movies
$(document).ready(function() {

    // Make an AJAX GET request to fetch movie data
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {

        // Retrieve the movies array from the response data
        let movies = data.results;
        // Create an empty string to store the movie list
        let movieList = '';
        // Iterate through each movie in the movies array
        for (let i = 0; i < movies.length; i++) {
        // Get the title of the current movie
        let movieTitle = movies[i].title;
        // Append the movie title to the movieList string wrapped in <li> tags
        movieList += '<li>' + movieTitle + '</li>';
	}
	// Set the HTML content of the list_movies element to the movieList string
        $('#list_movies').html(moviesList);
	});
});
