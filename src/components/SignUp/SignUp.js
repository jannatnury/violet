import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        // Sign Up form
        <div>
            <h2 className='my-3'>Please Sign Up</h2>
            <div className='signup-container border border-primary w-50 m-auto py-5 mb-4 shadow'>
                <form className='login-form'>
                    <h6 className='mt-2'>Email :</h6>
                    <input className='w-75' type="email" name="email" placeholder='Enter email' required />
                    <h6>Password :</h6>
                    <input className='w-75' type="password" name="password" placeholder='Enter password' required />
                    <br />
                    <button className='w-50 mt-2 fw-bolder py-2 reg-btn' type="submit" >Sign Up</button>
                </form>
                <p className=' font-monospace mt-2'>Already have an account? <Link className='text-danger text-decoration-none' to="/sign-in">Sign In.</Link></p>
            </div>
        </div>
    );
};

export default SignUp;