import React, { useState } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';


const Homes = () => {
    const [toggleTabls,setToggleTabs]=useState(1);

    const toggleTab = (index) => {
        setToggleTabs(index);// 

    }
    return (
        <div>
            <Navbar/>
            <h1>" NOUS VOUS PROPOSONS DES MAISONS & APPARTEMENT  EN VENTE ET A LOUER"</h1>

            <div className="SearchContener">
                <div className="bloc-onglets">
                    <div className={toggleTabls === 1 ? "achat onglet-active ": "achat"}
                     onClick={() => toggleTab(1)}>Acheter</div>
                    <div className={toggleTabls === 2 ? 'louer onglet-active' : "louer"} 
                    onClick={() => toggleTab(2)}>Louer</div>
                    <div className={toggleTabls === 3 ? "vente onglet-active":"vente"  }
                    onClick={() => toggleTab(3)}>A Vendre</div>
                </div>
                <div className="menus">
                    <div className={toggleTabls === 1? "menu menu-active":"menu"}>
                        <ul>
                            <li>Terrain</li>
                            <li>Maison</li>
                            <li>Villa</li>
                        </ul>
                    </div>
                    <div className={toggleTabls === 2? "menu menu-active":"menu"}>
                        <ul>
                            <li>Terrain</li>
                            <li>Maison</li>
                            <li>Villa</li>
                        </ul>
                    </div>
                    <div className={toggleTabls === 3? "menu menu-active":"menu"}>
                       
                    </div>
                </div>
            </div>
            <input /> 
            <button>Search</button>

            
        </div>
    );
};

export default Homes;