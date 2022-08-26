import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to="/Homes">
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/Annonces">
                    <li>Nos Annonces</li>
                </NavLink>
                <NavLink to="/Services">
                    <li>Nos Services</li>
                </NavLink>
                <NavLink to="/About">
                    <li>A Propos</li>
                </NavLink>
                <NavLink to="/Contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/Inscrire">
                    <li>S'inscrire</li>
                </NavLink>
                <NavLink to="/Identifier">
                    <li>S'identifier</li>
                </NavLink>

            </ul>

        </div>
            
        
    );
};

export default Navbar;