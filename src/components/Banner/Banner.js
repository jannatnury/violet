import React from 'react';
import './Banner.css';
import img from '../../assets/images/camera.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        // hero section 
        <div className='row hero-sec p-4 container m-auto shadow'>
            <div className="col-lg-6 col-sm-12 ">
                <img className='banner-img' src={img} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 hero-text">
                <h1>Improve Your <br /> Professional Skill <br />
                    Interactively...</h1>
                <p>
                    Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today.
                </p>
                <button className='button p-2 text-white border-0' type="submit">
                    <Link to="/courses">Get Started</Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;