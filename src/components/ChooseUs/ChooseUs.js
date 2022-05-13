import React from 'react';
import './ChooseUs.css';
import img from '../../assets/images/skil.svg';

const ChooseUs = () => {
    return (
        <div className='container skill-container my-3 shadow p-3'>
            <h2 className='my-3'>Why Choose Us ?</h2>
            <h5>Join over 11 million people learning on <span className='fw-bold brand-name'>Violet</span> </h5>
            <div className="row m-auto our-quality p-3 g-3">

                <div className="col-lg-6 img-container">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-6 d-flex flex-column d-flex justify-items-start">
                    <h4>Skilled Trainer</h4>
                    <p>Learn photography on Violet from experts with real world experience. Whether looking into photography as a hobby or plan to open your own studio, a photography course can teach you what you need to know.Violet offers an extensive selection of photography classes to get you to the next level.</p>
                    <h4>Stress less, learn better</h4>
                    <p>Enjoy fun storytelling, guided problem solving, and making lots of mistakes while learning. On Brilliant, your natural curiosity will drive you, not the threat of a test.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;