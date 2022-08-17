import React from "react";
import CartWidget from "../cartwidget/cartwidget";
import logo from './fotos/NH.png'
import './navBar.css';
import { NavLink }  from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-menu">
                    <li className="productos-btn">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className="negro-btn">
                        <NavLink to='/categoria/MasaMadre'>Masa Madre</NavLink>
                    </li>
                    <li className="nosotros-btn">
                        <NavLink to='/categoria/Moldes'>Moldes</NavLink>
                    </li>
                </ul>
                <img src={logo} alt="Negro Holandes Casa de Pan" />
                <NavLink className="cartWidget" to='/cart'>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;