import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";  // c'est ici que vont se gerer les chemain des pages 
import Annonce from './pages/annonces/Annonce';
import Home from './pages/home/Home'; 
import Louer from './pages/louer/Louer';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/louer'element={<Annonce/>}/> 
     <Route path='/louer/:id'element={<Louer/>}/>
     <Route path='/Acceuil'element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;