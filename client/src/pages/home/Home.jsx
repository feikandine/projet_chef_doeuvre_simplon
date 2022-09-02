import React from 'react';
import Featured from '../../components/featured/Featured';
import Post from '../../components/featured/Post';
import Postdetail from '../../components/featured/Postdetail';
import Headerbox from '../../components/header/Headerbox';

import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
      
        <div>
            <Navbar/>
            <Headerbox/>
            <div className="homecontainer"></div>
            <Post/>
            <h2>Les Details sur votre prochain chez-vous!!!</h2>
            <Postdetail/>
        </div>
    
    );
};

export default Home;