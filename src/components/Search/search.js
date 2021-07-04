import {React, useRef, useState, Fragment, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import './search.css';

const Search = props => {

    const searchInput = useRef(null);
    const [searchRedirect, setSearchRedirect] = useState(false);
    const [searchValue,setSearchValue] = useState();
    const [valueOnChange,setValueOnChange] = useState();

    const handleSearch = () => {
      setSearchValue(searchInput.current.value);
      setSearchRedirect(true);
    };

    const doInitial = () => {
      setSearchRedirect(false);
      setValueOnChange(searchInput.current.value);
    };


    return searchRedirect ? (
      <Fragment>
        <Redirect to={{ pathname: '/search', searchValue: searchValue}}/>
        <div className="divSearch">
          <h2 className="mainHeader">Bienvenidos.</h2>
          <h3 className="subHeader">Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
          <div className="input-group searchInput">
          <input type="text" className="form-control inputSearch" ref={searchInput} placeholder="Buscar una película..." />
          <div className="input-group-append">
            <button className="btn btn-search" type="button" id="Cambiado" onClick={doInitial}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      </Fragment>
      ) : (
        <div className="divSearch">
          <h2 className="mainHeader">Bienvenidos.</h2>
          <h3 className="subHeader">Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
          <div className="input-group searchInput">
          <input type="text" className="form-control inputSearch" ref={searchInput} value={valueOnChange} placeholder="Buscar una película..." />
          <div className="input-group-append">
            <button className="btn btn-search" type="button" id="Original" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    );


};

export default Search;