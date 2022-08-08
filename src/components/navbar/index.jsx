import React from "react";
import CartWidget from "../cartwidget/cartwidget";
import logo from './fotos/NH.png'
import './styles.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-menu">
                    <li className="productos-btn"><a href="#">Home</a></li>
                    <li className="negro-btn"><a href="#">El Negro</a></li>
                    <li className="nosotros-btn"><a href="#">Nosotros</a></li>
                    <li className="contacto-btn"><a href="#">Contacto</a></li>
                </ul>
                <img src={logo} alt="Negro Holandes Casa de Pan" />
                <a className="cartWidget" href="#">
                    <CartWidget />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;