function movies(inputArr) {
    //class creation:
    class Movie {
        constructor(name, director, date) {
            this.name = name;
        }
    }

    //variables:
    let moviesList = [];

    //functions:
    function addMovie(moviesList, title) {
        const currentMovie = new Movie(title);
        moviesList.push(currentMovie);
        return moviesList;
    }

    function addDirector(moviesList, title, director) {
        moviesList.forEach(movie => {
            if (movie.name === title) {
                movie.director = director;
            }
        });
        return moviesList;
    }

    function addDate(moviesList, title, date) {
        moviesList.forEach(movie => {
            if (movie.name === title) {
                movie.date = date;
            }
        });
        return moviesList;
    }

    function printMovie(movieObject) {
        console.log(JSON.stringify(movieObject));
    }

    //command flow:
    inputArr.forEach(commandLine => {
        if (commandLine.includes('addMovie ')) {
            let movieTitle = commandLine.split('addMovie ')[1];
            moviesList = addMovie(moviesList, movieTitle);
        } else if (commandLine.includes(' directedBy ')) {
            let [movieTitle, director] = commandLine.split(' directedBy ');
            moviesList = addDirector(moviesList, movieTitle, director);
        } else if (commandLine.includes(' onDate ')) {
            let [movieTitle, releaseDate] = commandLine.split(' onDate ');
            moviesList = addDate(moviesList, movieTitle, releaseDate);
        }
    });
    moviesList.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            printMovie(movie);
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
console.log('--------------------------------------------');
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);
console.log('--------------------------------------------');