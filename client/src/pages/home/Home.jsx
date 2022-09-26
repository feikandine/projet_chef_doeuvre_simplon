import React from 'react';
import Post from '../../components/featured/Post';
import Postdetail from '../../components/featured/Postdetail';
import Headerbox from '../../components/header/Headerbox';
import Lignsepa from '../../components/offline/lignsepa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImagContact from '../../Assets/images/serviceclient.png'

import Footer from '../../components/footer/footer';
import "./home.css"

import Navbar from '../../components/navbar/Navbar';
import NavScrollExample from '../../components/navbar/Navbar';


const Home = () => {
    return (
      
        <div>
            <NavScrollExample/>
            <Headerbox/>
            <Lignsepa/>
            {/* <div className="homecontainer">
                <h1 className='hometitle'>parcourir par type d'annonce</h1>
                <PropertyList/>
            </div> */}
            <Post/>
            <div className='contact-container '>
    
    <br /> <br /><br />
     <div className="container">
     <h2 className='contactgreettext'>CONTACTER NOUS POUR PLUS D'INFORMATIONS</h2>
      <div className="row " >
        <div className='col-md-6'>
          <img src={ImagContact} alt="" className='contactimg' />
        </div>

        <Form className='col-md-6'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="name" placeholder="Entrer votre nom" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="name" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ecriver nous votre Besoin ici (nous vous contacterons pour en parler) Merci!!!</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
     </div>
      <br /><br />
      
    </div>
           
            
            
            <br />
            <Lignsepa/>
            <Footer/>
        </div>
    
    );
};

export default Home;
