const movieTitle = document.querySelector('.movie-title');
const releaseDate = document.querySelector('.release-date');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');
const footerYear = document.querySelector('.year');

window.onload = () => {
    //console.log('hello');
    let url = 'https://api.themoviedb.org/3/movie/854648?api_key=21df2c343e7dde49f574347a9b252ec3';

    fetch(url)
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        //console.log(data.title);
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date)
        //console.log(date);
        releaseDate.textContent = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;

        movieDuration.textContent = `${data.runtime} minutes`;

        movieQuote.textContent = data.tagline;

        movieOverview.textContent = data.overview;

        let posterUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;

        moviePoster.alt = `${data.title} Poster`;

        let genresToDisplay = '';

        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, `;
        });

        //console.log(genresToDisplay);

        let genresUpdated = genresToDisplay.slice(0, -2) + '.';
        //console.log(genresUpdated);

        movieGenres.textContent = genresUpdated;

        let currentYear = new Date().getFullYear();
        //console.log(currentYear);
        footerYear.textContent = currentYear;
    })
}