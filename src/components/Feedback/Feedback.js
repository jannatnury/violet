import React from 'react';
import './Feedback.css';
import img from '../../assets/images/emails.svg';
import { toast } from 'react-toastify';



const Feedback = () => {
    // const giveFeedback = () => {
    //     toast.promise(
    //         {
    //             "Feedback Received";
    //         }
    //     )
    // }
    return (
        <div className='mt-5 shadow container p-4 mb-5 feedback-sec m-auto'>
            <h2 className='mt-3'>Give Your Feedback</h2>
            <div className='row container my-4 order-sm-last m-auto align-items-center'>
                <div className="col-lg-6 ">
                    <input className='p-3 my-3 shadow' type="email" name="email" id="email-input" placeholder='Enter your email' required /> <br />
                    <input className='p-3 shadow' type="text" placeholder='Write your comment' id="comments" required /> <br />
                    <button className='feedback-btn p-2 m-2' type="submit">Give Feedback</button>
                </div>
                <div className="col-lg-6 feedback">
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Feedback;