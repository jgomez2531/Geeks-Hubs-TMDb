import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (<header>
        <NavLink to="popular">
            <div className="spanMenu"><span className="populares">Películas populares</span></div>
        </NavLink>
        <NavLink to="upcoming">
            <div className="spanMenu"><span className="upcoming">Próximos estrenos</span></div>
        </NavLink>
        <NavLink to="top_rated">
            <div className="spanMenu"><span className="top-rated">Películas mejor valoradas</span></div>
        </NavLink>
    </header>)
};


export default Header;