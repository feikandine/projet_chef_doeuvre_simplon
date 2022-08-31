import React from 'react';
import "./header.css";

const Headerbox = () => {
    return (
        <div className='header' style={{backgroundImage:"url(/image-home.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"cover",backgroundSize:"cover"} }>

            <div className="headercontainer">
                <div className="greetext">
                    <h1>" NOUS VOUS PROPOSONS DES MAISONS & APPARTEMENT </h1>
                    <h1>EN VENTE ET A LOUER"</h1>
                </div>

                <div className="searchbox">
                 <input type="text"placeholder='gfddghj' className='headerinput' />
                 <button className='headerbtn'> Search</button>
                </div>
            </div>
            
        </div>
    );
};

export default Headerbox;