import logo from './fotos/NH.png'
import React from "react";
import './styles.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <span>
                    <i className="fas fa-bars burger"></i>
                    <ul className="nav-menu">
                        <li className="productos-btn"><a href="">Home</a></li>
                        <li className="negro-btn"><a href="">El Negro</a></li>
                        <li className="nosotros-btn"><a href="">Nosotros</a></li>
                        <li className="contacto-btn"><a href="">Contacto</a></li>
                    </ul>
                </span>
                <img src={logo} alt="Negro Holandes Casa de Pan" />
            </div>
        </nav>
    )
}

export default NavBar;