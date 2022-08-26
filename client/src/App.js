import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"  // c'est ici que vont se gerer les chemain des pages  
import Navbar from './components/Navbar';
import About from './pages/About';
import Annonces from './pages/Annonces';
import Contact from './pages/Contact';
import Homes from './pages/Homes';
import Identifier from './pages/Identifier';
import Inscrire from './pages/Inscrire';
import Services from './pages/Services';

const App = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Homes/>} />
      <Route path="/Annonces"element={<Annonces/>}/>
      <Route path="/Services"element={<Services/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/Contact'element={<Contact/>}/>
      <Route path='/Inscrire'element={<Inscrire/>}/>
      <Route path='/Identifier'element={<Identifier/>}/>
      {/* Si l'url ne correspond pas, path "/*" fonctionnera */}
      <Route path='/*'element={<Homes/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
