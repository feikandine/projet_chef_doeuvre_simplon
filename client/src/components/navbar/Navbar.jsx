import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navcontainer">
                <span className='logo'>Home's Parck</span>
                <div className="navlink">
                    <NavLink to="/Home">
                        Accueil
                    </NavLink>
                </div>
                <div className="navlink">
                <NavLink to="/Annonces">
                  Nos Annonces
                </NavLink>
                </div>
                <div className="navlink">
                <NavLink to="/Services">
                 Nos Services
                </NavLink>
                </div>
                <div className="navlink">
                <NavLink to="/About">
                    A Propos
                </NavLink>
                </div>
                <div className="navlink">
                <NavLink to="/Contact">
                    Contact
                </NavLink>
                </div>
                

                <div className="loginbox">
                    <NavLink to="/Inscrire">
                        <button className='navbutton'>S'inscrire</button>
                    </NavLink>
                    <NavLink to="/Identifier">
                       <button className='navbutton'>S'identifier</button>
                    </NavLink>
                </div>

            </div>

        </div>


    );
};

export default Navbar;