
//La liste de nos annonces
import React from 'react';
import "./propertyList.css"
import image4 from "../../images/salon-maison1.jpg"

import footer from '../footer/footer';
const propertyList = () => {
    return (
        <div className='Plist'>
            <div className="PlistItem">
                <img src={image4} alt=""  className='PlistImg'/>
                <div className="PlistTitles">
                     <h1>Appartements</h1>
                     <h2>233 appartements</h2>
                </div>
            </div>

            <div className="PlistItem">
                <img src={image4} alt="" className='PlistImg' />
                <div className="PlistTitles">
                     <h1>Appartements</h1>
                     <h2>233 appartements</h2>
                </div>
            </div>

            <div className="PlistItem">
                <img src={image4} alt="" className='PlistImg' />
                <div className="PlistTitles">
                     <h1>Appartements</h1>
                     <h2>233 appartements</h2>
                </div>
            </div>

            <div className="PlistItem">
                <img src={image4} alt="" className='PlistImg' />
                <div className="PlistTitles">
                     <h1>Appartements</h1>
                     <h2>233 appartements</h2>
                </div>
                
                
                
            </div>
            
             <footer/>
        </div>
        
    );
};

export default propertyList;