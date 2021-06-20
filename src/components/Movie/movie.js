import React from 'react';
import './movie.css';
import star from './star.png';

const Movie = ({movie}) => {

    return (
        <div className="movie">
            <img src={"http://image.tmdb.org/t/p/w200"+movie.poster_path} class="moviePoster" alt={movie.title}/>
            <h5 className="movieTitle">{movie.title}</h5>
            <p className="vote"><img src={star} class="star" alt="star" />{movie.vote_average}</p>
        </div>
    )
}

export default Movie;