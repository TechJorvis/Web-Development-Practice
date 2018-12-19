function loadMovieDB() {
    let movies = [
        {
            title: "Frozen",
            rating: 4.5,
            hasWatched: true
        },
        {
            title: "Incredibles",
            rating: 4.4,
            hasWatched: false
        },
        {
            title: "Incredibles 2",
            rating: 4.5,
            hasWatched: true
        },
        {
            title: "Spiderman: Into the Verse",
            rating: 4.8,
            hasWatched: true
        },
        {
            title: "Venom",
            rating: 4.6,
            hasWatched: false
        }
    ];

    let movie = {}, movie_title = "", movie_rating = 0, isWatched = false, watched_status = "";
    for (let i = 0; i < movies.length; i++) {
        // Extract the movie object
        movie = movies[i];

        // Extract the movie details
        movie_title = movie["title"];
        movie_rating = movie["rating"];
        isWatched = movie["hasWatched"];

        // Set the seen status
        if (isWatched) {
            watched_status = "seen";
        } else {
            watched_status = "not seen";
        }

        // Print the status
        console.log("You have " + watched_status + " \"" + movie_title + "\" - " + movie_rating + " stars");
    }
}
// End of function loadMovieDB

loadMovieDB()