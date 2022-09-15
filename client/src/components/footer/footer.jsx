import React from 'react';
import "./footer.css"
const footer = () => {
    return (
        <div className='footer' >
            <div className="fLists">
                <h2>Où nous trouver ?</h2>
                <span className='fItems'>Nous sommes  à Lomé-Togo <br />au Qartier Leo2000</span>
            </div>

            <div className="fLists">
                <h2> Suiver nous sur !!!</h2>
                <ul className='fItems'>
                    <li>  Like us on Facebook</li>
                    <li>  Follow us on Twitter</li>
                    <li>  Follow us on Istagrame</li>
                </ul>
            </div>

            <div className="fLists">
                <h2>Appeler nous sur</h2>
                <ul className='fItems'>
                    <li>+228 22 22 22</li>
                    <li> + 228 00 00 00 00</li>
                </ul>
            </div>
            
        </div>
    );
};

export default footer;