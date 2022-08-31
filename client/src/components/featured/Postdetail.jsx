import React from 'react';
import Imgannonce1 from "../../images/jardin-maison1.jpg"
import Imgannonce3 from "./annonce1.jpg";
import "./postdetail.css";

const Postdetail = () => {
    return (
        <div className='detail'>
            <h3>Annonce Nº 0003</h3>
            <div className='detailcontainer'>


                <div className="detailImgbox">
                    <div className="imgBox">
                        <img src={Imgannonce3} alt="" />
                    </div>
                    <div className="firstInfo">
                        <p> Coux Mensuel : <span>400.000 F CFA</span></p>
                        <p> Avence : <span>6 Mois</span></p>
                        <p> Ville : <span>Lomé</span></p>
                        <p> Quartier : <span>Adidogomé</span></p>

                    </div>

                </div>

                <div className="lastInfo">
                    <div className="description">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita
                             hic cupiditate dolor nisi, repellat quos culpa. Odio quas sed ducimus 
                             adipisci fuga, porro neque nobis iusto eveniet facere quidem nostrum quae 
                             sequi! Quas natus eos dolore sed non tempora ipsa soluta, laboriosam dolorem 
                             quibusdam sed, ut pariatur, dolores cupiditate soluta necessitatibus!</p>
                    </div>
                    <div className="autreDetail">
                        <h2>Autres details</h2>
                        <p>Nombre de chambres :  <span>4</span></p>
                        <p> Salon  :  <span>2</span></p>
                        <p>Cuisine interne :  <span>1</span></p>
                        <p>Cuisine externe :  <span></span></p>
                        <p>Terrasse :  <span>2</span></p>
                        <p>WC interne :  <span>2</span></p>
                        <p>WC externe :  <span>0</span></p>
                        <p>Garage :  <span>1</span></p>
                        <p>Menage :  <span>1</span></p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Postdetail;