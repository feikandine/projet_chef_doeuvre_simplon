import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImagContact from '../../Assets/images/serviceclient.png'
import './contact.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import ContactList from './ContactList';

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    firstname: "",
    email: "",
    number: "",
    message: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newPerson,
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ name: "", firstname: "", email: "", number: "", message: "" });
    navigate("/");
  }

// This following section will display the form that takes the input from the user.
  return (
    <div className='contact-container '>
      <Navbar />
      <br />
      <br />
      <ContactList/>
    <br /><br />
    <br />

    <br />
      <div><Footer /></div>
    </div>
  );
};


export default Contact;