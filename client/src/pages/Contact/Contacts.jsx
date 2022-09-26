import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImagContact from '../../Assets/images/serviceclient.png'
import './contact.css'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'

const Contact = () => {


  //zone de recuperation des information du client
const [username,setUsername]=useState("");
const[email,setEmail]= useState("");
const [number,setNumber]= useState("");
const [message,setMessage]= useState("");

//on form submit click handler
const handleSubmit = (event)=>{
  event.preventDefault();

  const NewMessage={
    username,
    email,
    number,
    message,
  }
  console.log(NewMessage);
}
  return (
    <div className='contact-container '>
      <Navbar />
    <br /> <br /><br />
     <div className="container">
     <h2 className='contactgreettext'>CONTACTER NOUS POUR PLUS D'INFORMATIONS</h2>
      <div className="row " >
        <div className='col-md-6'>
          <img src={ImagContact} alt="" className='contactimg' />
        </div>

        <Form className='col-md-6' method= "POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="name" onChange={e=>setUsername(e.target.value)} placeholder="Entrer votre nom" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="name" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" onChange={e=>setNumber(e.target.value)} placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ecriver nous votre Besoin ici (nous vous contacterons pour en parler) Merci!!!</Form.Label>
            {/* <Form.Control  onChange={e=>setsetMessage(e.target.value)} as="textarea" rows={3} /> */}
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
     </div>
      <br /><br />
      <div><Footer/></div>
    </div>
  );
};

export default Contact;