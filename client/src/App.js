import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";  // c'est ici que vont se gerer les chemain des pages 
import Annonce from './pages/annonces/Annonce';
import Home from './pages/home/Home'; 

import Service from './pages/service/Service';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/service'element={<Service/>}/>
     <Route path='/louer'element={<Annonce/>}/> 
     <Route path='/Acceuil'element={<Home/>}/>
     <Route path='/Annonce'element={<Annonce/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;