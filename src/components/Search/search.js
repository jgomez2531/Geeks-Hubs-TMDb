import React from 'react';
import './search.css';

const Search = props => {
    return (<div className="divSearch">
    <h2>Bienvenidos.</h2>
    <h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
    <div className="input-group searchInput">
    <input type="text" className="form-control inputSearch" placeholder="Buscar una película..."/>
    <div className="input-group-append">
      <button className="btn btn-search" type="button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
  </div>)
};


export default Search;