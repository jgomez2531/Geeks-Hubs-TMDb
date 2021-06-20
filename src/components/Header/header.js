import React from 'react';
import './header.css';

const Header = props => {
    return (<header>
        <span className="populares">Películas populares</span>
        <span className="upcoming">Próximos estrenos</span>
        <span className="top-rated">Películas más votadas</span>
    </header>)
};


export default Header;