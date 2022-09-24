import React from 'react';
import "./footer.css"
import {FaRegEnvelope} from'react-icons/fa'
import{FaPhoneAlt}from 'react-icons/fa'
import {FaWhatsapp}from 'react-icons/fa'
import{FaFacebook} from'react-icons/fa'
import{FaTwitter} from'react-icons/fa'
import{FaTelegramPlane} from'react-icons/fa'



const footer = () => {
    return (
        <div className='footer' >
            

            <div class="container text-center">
               
                <div class="row">
                    <div class="col-6 col-md-4">
                        <h2>Où nous trouver ?</h2>
                        <span className='fItems'>Nous sommes  à Lomé-Togo <br />au Qartier Leo2000</span>

                    </div>
                    <div class="col-6 col-md-4">
                    <div className="fLists">
                <h2> Suiver nous sur !!!</h2>
                <ul className='fItems'>
                     <a href="">  <FaFacebook/> Like us on Facebook</a> 
                  <li> <a href=""> <a href="#"><FaTwitter/></a> Follow us on Twitter</a></li>
                   <a href="#">   <FaTelegramPlane/> Follow us on Istagrame</a>
                </ul>
            </div>
                    </div>
                    <div class="col-6 col-md-4">
                    <div className="fLists">
                <h2>Appeler nous sur</h2>
                <ul className='fItems'>
                    <li>   <FaPhoneAlt/> +228 22 22 22     </li>
                    <li>   <FaWhatsapp/> + 228 00 00 00 00</li>
                    <li>   <FaRegEnvelope/> Feikan93@.com</li>
                </ul>
            </div> 
                    </div>
                </div>

                
            </div>

        </div>
    );
};

export default footer;
