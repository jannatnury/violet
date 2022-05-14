import React from 'react';
import './CheckOut.css';
import img from '../../assets/images/checkout1.jpg';

const CheckOut = () => {
    return (
        <div>

            <div className='w-50 m-auto my-3'>
                <img className='checkout-img shadow mt-3' src={img} alt="" />
            </div>
            <div className='w-50 m-auto mt-3 d-flex flex-column align-items-start shadow p-4 mb-4'>
                <h2>Complete Photography Cource</h2>
                <h5>Instructor : <span className='text-secondary'>Jannat Nury</span> </h5>
                <h4>Course Description :</h4>
                <p>A to Z guide.We provide all kind of support during wild photo session.In this course lerner will face real project experience.We also arrange weekly photo contest to see lerners development.Giving instruction on every session is our special quality.Enroll now. </p>
                <p><span className='fw-bold'>Total Enrolled :</span> 5739 Students</p>
                <p><span className='fw-bold'>Rating :</span> 4.3</p>
                <p><span className='fw-bold'>Price :</span> 15,000 Tk</p>
            </div>
        </div>
    );
};

export default CheckOut;