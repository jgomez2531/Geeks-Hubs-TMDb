import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom'
import Movie from '../Movie/movie';
import Details from '../Details/details';
import './movies.css';

const Movies = props => {
    const movieType = props.match.params.movieType ;
    const movieRequest = ( movieType === 'search' ? 'search/movie' :  'movie/');
    const movieTypeRequest = ( movieType === 'search' ? '' :  movieType);
    const [movies,setMovies] = useState([]);
    const searchCond = ( movieType === 'search' ? '&query=' + props.location.searchValue + '&page=1&include_adult=false' : '');

    useEffect(() =>{
      axios.get('https://api.themoviedb.org/3/' + movieRequest + movieTypeRequest + '?api_key=542d2f742e07af0147eff5e0ee7bf067&language=es-ES' + searchCond)
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

        case 'details':
          break;

        case 'search':
          var titlePage = 'Resultados de la búsqueda de: ' + props.location.searchValue;
          break;

        default:
          return <Redirect to='popular' />;
          break;
      }

    return (
        <div>
            <h3 className={(movieType != 'details' ? 'titlePage' : 'titlePageNone')}>{(titlePage)}</h3>
            <div className={(movieType != 'details' ? 'movies' : '')}>
              {movieType != 'details' ? (
                  movies?.map(movie => <Movie key={movie.id} movie={movie} />)
              ) : (
                  <Details />
              )}
            </div>
        </div>
    )
}

export default Movies;