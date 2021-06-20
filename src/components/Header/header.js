import React from 'react';
import './header.css';

const Header = props => {
    return (<header>
        <div className="spanMenu"><span className="populares">Películas populares</span></div>
        <div className="spanMenu"><span className="upcoming">Próximos estrenos</span></div>
        <div className="spanMenu"><span className="top-rated">Películas mejor valoradas</span></div>
    </header>)
};


export default Header;