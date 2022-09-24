import React from 'react';
import Featured from '../../components/featured/Featured';
import Post from '../../components/featured/Post';
import Postdetail from '../../components/featured/Postdetail';
import Headerbox from '../../components/header/Headerbox';
import Lignsepa from '../../components/offline/lignsepa';
import PropertyList from '../../components/propertyList/propertyList';
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

            
            {/* <Postdetail/> */}
            <br />
            <Lignsepa/>
            <Footer/>
        </div>
    
    );
};

export default Home;
