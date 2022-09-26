import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import Post from '../../components/featured/Post';

const Annonce = () => {
    return (
        <div>
            <Navbar/>
            <h1>Nos annonces</h1>
            <Post/>


            <Footer/>
        </div>
    );
};

export default Annonce;