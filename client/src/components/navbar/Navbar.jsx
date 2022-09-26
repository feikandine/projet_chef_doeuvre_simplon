// import React from 'react';
// import "./Navbar.css";
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="navcontainer">
//                 <span className='logo'>Home's Parck</span>
//                 <div className="navlink">
//                     <NavLink to="/">
//                         Accueil
//                     </NavLink>
//                 </div>
//                 <div className="navlink">
//                 <NavLink to="/Annonce">
//                   Nos Annonces
//                 </NavLink>
//                 </div>
//                 <div className="navlink">
//                 <NavLink to="/Service">
//                  Nos Services
//                 </NavLink>
//                 </div>
//                 <div className="navlink">
//                 <NavLink to="/About">
//                     A Propos
//                 </NavLink>
//                 </div>
//                 <div className="navlink">
//                 <NavLink to="/Contact">
//                     Contact
//                 </NavLink>
//                 </div>
                

//                 <div className="loginbox">
//                     <NavLink to="/Inscrire">
//                         <button className='navbutton'>S'inscrire</button>
//                     </NavLink>
//                     <NavLink to="/Identifier">
//                        <button className='navbutton'>S'identifier</button>
//                     </NavLink>
//                 </div>

//             </div>
//             <br />
//         </div>


//     );
// };

// export default Navbar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import"./Navbar.css"


function NavScrollExample() {
  return (
    <Navbar  expand="lg" id='navcontainer' className='navbarcontainer'>
      <Container fluid>
        <Navbar.Brand href="#" id='logo'>Home's Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/Annonce">  Annonces</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/About">A Propos</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            
            {/* <Nav.Link href="#" disabled>
              contact
            </Nav.Link> */}
          </Nav>
          <br />
          <Nav
            className="ms-auto my-2 my-lg-0"id='link'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Connexion">S'identifier</Nav.Link>
            <Nav.Link href="/Identifier">S'enregistrer</Nav.Link>
            
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;