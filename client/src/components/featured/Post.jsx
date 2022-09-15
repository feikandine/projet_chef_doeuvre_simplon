import React from 'react';
import { Features } from './data';
import "./featured.css";
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className='Post'>
            <div className="lineoff"></div>
            <h1 className='titre'>Nos Annonces</h1>
            <div className="featuredcontainer"></div>
            <div className="featuredcontainer">

                {/*  */}
                {
                    Features.map((post) => {
                        return (
                                // ici nous avons le model des post d'annonce
                            
                                <div className="featuredItem">
                                    {/* <div className="image">
                                        <img src={post.img} alt="" className='featured-images' />
                                        </div>
                                    <div className='featuredInfo'>
                                        
                                        <h3>Annonce Nº{post.num} </h3>
                                        <h3>Localité  :  {post.loc}</h3>
                                        <h2>{post.prix} F CFA</h2>
                                       <Link to="/Postdetail">
                                        <button className='featuredBtn' > Plus de detail  </button>
                                       </Link>
                                    </div> */}

                                </div>
                        

                        )                                                             
                    })
                }
            </div>

        </div>
    );
};

export default Post;