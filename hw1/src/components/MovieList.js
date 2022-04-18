import React from 'react';
import PropTypes from 'prop-types';
import "./../css/movies.css"

export const MovieList = ({ listOfMovies }) => {
    console.log(listOfMovies);
    return (
        <div id="movie-list">
            <h1 id="big-title"> Top 5 movies: </h1>
            <hr />
            {listOfMovies.map((movie, i) => {
                return (
                    <div key={i}>
                        <h2>Name: {movie.name}</h2>
                        <h3>Year: {movie.date}</h3>
                        <p>Genre: {movie.genre}</p>
                        <p>Plot: {movie.plot}</p>
                        <a href={movie.imdbLink}>Check on IMDB</a>
                        <br />
                        <img src={movie.imageUrl} alt={movie.name} width="200" height="250" />
                        <hr />
                    </div>
                )

            })}
        </div >
    )
}

MovieList.propTypes = {
    listOfMovies: PropTypes.arrayOf(PropTypes.object).isRequired
}