import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './details.css';
import star from './star.png';

const Details = () => {

    const location = useLocation();
    const movieId = location.state.movie;
    const [movieDetails,setMovieDetails] = useState([]);

    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=542d2f742e07af0147eff5e0ee7bf067&language=es-ES')
        .then(res => setMovieDetails(res.data))
        .catch(console.error)
    },[]);

    const date = new Date(movieDetails.release_date);
    const dateFormated = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    return (
        <div className="details">
            <h3 className="detailsMovieHeader">Ficha técnica de {movieDetails.title + ' (' + date.getFullYear() + ')' }</h3>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <img src={"http://image.tmdb.org/t/p/w342"+movieDetails.poster_path} class="moviePosterDetails" alt={movieDetails.title}/>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 detailsMovie">
                        <div className="titleDetails">
                            <h1>Título:</h1>
                            <p>{movieDetails.title}</p>
                        </div>
                        <div className="titleDetails">
                            <h1>Título original:</h1>
                            <p>{movieDetails.original_title}</p>
                        </div>
                        <div className="titleDetails">
                            <h1>Fecha de lanzamiento:</h1>
                            <p>{dateFormated}</p>
                        </div>
                        <div className="titleDetails">
                            <h1>Géneros:</h1>
                            <p>
                            {
                                movieDetails.genres?.map(gener => gener.name + ' ' )
                            
                            }
                            </p>
                        </div>
                        <div className="">
                            <h1>Sinopsis:</h1>
                            <p>{movieDetails.overview}</p>
                        </div>
                        <p className="voteDetails"><img src={star} class="star" alt="star" />{movieDetails.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;