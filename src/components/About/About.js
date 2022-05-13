import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import img from '../../assets/images/photo.jpg';

const About = () => {
    return (
        <div>
            <div className='row container g-5 mt-3 m-auto'>
                <div className="col-lg-6">
                    <img className='img-fluid shadow' src={img} alt="image" />
                </div>
                <div className="col-lg-6 shadow p-3">
                    <h3 className='font-monospace my-0'>Hello</h3>
                    <h2>I am Jannat Nury</h2>
                    <p>A full stack web developer based in Dhaka, Bangladesh. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Shortly after graduating from National University of Bangaldesh with a BSc. in Computer Science and Engineering, I started freelancing where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                    <button className='button p-2 border-0'>
                        <Link className='' to="/hire-me">Download Resume</Link>
                    </button>
                </div>
            </div>
            <div className='mt-5 m-auto w-50'>
                <h2>Language Profeciency</h2>
                <p>
                    Bangla : Nativ <br />
                    English : Fluent <br />
                    Hindi : Conversational
                </p>
            </div>
            <div className='mt-5 m-auto w-50 mb-3'>
                <h2>Educational Qualifications</h2>
                <p>
                    2023 : BSc. in Computer Scince and Engineering  <br />
                    2022 : Full Stack Web Development
                </p>
            </div>
        </div>
    );
};

export default About;