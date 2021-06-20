import React from 'react';
import './search.css';

const Search = props => {
    return (<div className="input-group searchInput">
    <input type="text" className="form-control inputSearch" placeholder="Buscar una película..."/>
    <div className="input-group-append">
      <button className="btn btn-search" type="button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>)
};


export default Search;