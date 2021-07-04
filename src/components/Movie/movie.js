import React from 'react';
import Details from '../Details/details';
import { NavLink } from 'react-router-dom';
import './movie.css';
import star from './star.png';

const Movie = ({movie}) => {

    return (
        <NavLink to={{
            pathname:'/details',
            state: {movie: movie.id}  
        }}>
            <div className="movie" id="movies">
                <img src={"http://image.tmdb.org/t/p/w200"+movie.poster_path} class="moviePoster" alt={movie.title}/>
                <h5 className="movieTitle">{movie.title}</h5>
                <p className="vote"><img src={star} class="star" alt="star" />{movie.vote_average}</p>
            </div>
        </NavLink>
    )
}

export default Movie;