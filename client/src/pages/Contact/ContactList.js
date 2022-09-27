import React from 'react';
import ImagContact from '../../Assets/images/serviceclient.png'
import './contact.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactList = () => {
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
        e.preventDefault()
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = JSON.stringify({ ...form })
        console.log(form)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: newPerson,
            redirect: 'follow'
        };

        await fetch("http://localhost:5000/record/add", requestOptions)
            .then(response => response.text())
            .then(result => {
                setForm({
                    name: "",
                    firstname: "",
                    email: "",
                    number: "",
                    message: "",
                })
            })
            .catch(error => console.log('error', error));


    }



    return (
        <div>
            <div className="container">
                <h2 className='contactgreettext'>CONTACTER NOUS POUR PLUS D'INFORMATIONS</h2>
                <div className="row " >
                    <div className='col-md-6'>
                        <img src={ImagContact} alt="" className='contactimg' />
                    </div>
                    <Form className='col-md-6' onSubmit={onSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text"
                                id='name'
                                value={form.name}
                                onChange={(e) => updateForm({ name: e.target.value })}
                                placeholder="Entrer votre nom" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text"
                                id='firstname'
                                value={form.firstname}
                                onChange={(e) => updateForm({ firstname: e.target.value })}
                                placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                id='email'
                                value={form.email}
                                onChange={(e) => updateForm({ email: e.target.value })}
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number"
                                id='number'
                                value={form.number}
                                onChange={(e) => updateForm({ number: e.target.value })}
                                placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Ecriver nous votre Besoin ici (nous vous contacterons pour en parler) Merci!!!</Form.Label>
                            <Form.Control
                                type="text"
                                id='message'
                                value={form.message}
                                onChange={(e) => updateForm({ message: e.target.value })}
                                placeholder="Enter your text" />

                        </Form.Group>

                        <Button variant="primary" type="submit" value="Create person">
                            Envoyer
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default ContactList;

