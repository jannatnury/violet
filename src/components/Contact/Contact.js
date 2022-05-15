import React from 'react';
import img from '../../assets/images/emails.svg';

const Contact = () => {
    return (

        <div className='mt-5 shadow container p-4 mb-5 feedback-sec m-auto bg-light'>
            <h2 className='mt-3'>Contact Us</h2>
            <div className='row container my-4 order-sm-last m-auto align-items-center'>
                <div className="col-lg-6 ">
                    <input className='p-3 my-3 shadow' type="email" name="email" id="email-input" placeholder='Enter your email' required /> <br />
                    <input className='p-3 shadow' type="text" placeholder='Write your comment' id="comments" required /> <br />
                    <button className='feedback-btn p-2 m-2' type="submit">Contact</button>
                </div>
                <div className="col-lg-6 feedback">
                    <img src={img} alt="" />
                </div>

            </div>
        </div>

    );
};

export default Contact;