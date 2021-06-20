import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/movie';
import './movies.css';

const Movies = props => {
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([]);
 
    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/movie/' + movieType + '?api_key=542d2f742e07af0147eff5e0ee7bf067&language=es-ES')
        .then(res => setMovies(res.data.results))
        .catch(console.error)
    },[movieType]);

    switch (movieType) {

        case 'popular':
          var titlePage = 'Películas populares';
          break;

        case 'upcoming':
          var titlePage = 'Próximos estrenos';
          break;

        case 'top_rated':
          var titlePage = 'Películas mejor valoradas';
          break;

      }

    return (
        <div>
            <h3 className="titlePage">{titlePage}</h3>
            <div className="movies">
                {movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Movies;