import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";  // c'est ici que vont se gerer les chemain des pages 
import Postdetail from './components/featured/Postdetail';
import Annonce from './pages/annonces/Annonce';
import Home from './pages/home/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Service from './pages/service/Service';
import About from './pages/About/About';
import Contact from './pages/Contact/Contacts';
import Connexion from './pages/Connexion/Connexion';
import Identifier from './pages/Connexion/Identifier';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/service'element={<Service/>}/>
     <Route path='/louer'element={<Annonce/>}/> 
     <Route path='/Acceuil'element={<Home/>}/>
     <Route path='/Annonce'element={<Annonce/>}/>
     <Route path='/Postdetail'element={<Postdetail/>}/>
     <Route path='About'element={<About/>}/>
     <Route path='Contact'element={<Contact/>}/>
    <Route poath='Connexion'element={<Connexion/>}/>
    <Route path='Identifier'element={<Identifier/>}/>
  
    </Routes>
    </BrowserRouter>
  );
};

export default App;
