import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/recetas">Recetas</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;