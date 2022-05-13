import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/brand-logo.png';
import img from '../../assets/images/google-logo.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='row w-75 m-auto pt-4 pb-3'>
                <div className="col-lg-6 mb-sm-4">
                    <Link to="/" className='footer-logo'>
                    <img src={logo} alt="" /></Link>
                    <p>Violet, Inc.is a for-profit massive open online course provider aimed at professional adults and students. Her, students take courses primarily to improve job-related skills.
                    </p>
                    <p>Copyright <small><i className="fas fa-copyright"></i></small> 2022, Jannat Nury</p>
                </div>
                <div className="col-lg-6">
                    <h5>Contract With Us</h5>
                    <p>Address : 141, Victoria Street, <br /> Programming Hero, Bangladesh</p>
                    <p>Contract : +0880123456789</p>
                    <h6>Download Our App</h6>
                    <Link to="/error" className=' play-store'>
                        <img src={img} alt="google-play-logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;