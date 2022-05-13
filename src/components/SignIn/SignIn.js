import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {

    return (
        // Login form
        <div>
            <h2 className='my-3'>Sign In</h2>
            <div className='signin-container border border-primary w-50 m-auto py-5 mb-4 shadow'>
                <form className='login-form'>
                    <h6>Email :</h6>
                    <input className='w-75 mb-3' type="email" name="email" placeholder='Enter email' required />
                    <h6>Password :</h6>
                    <input className='w-75 mb-3' type="password" name="password" placeholder='Enter password' required />
                    <br />
                    <button className='w-50 fw-bolder py-2 reg-btn mt-3' type="submit" >Sign In</button>
                </form>
                <p className=' font-monospace mt-2'>Don't have an account? <Link className='text-danger text-decoration-none' to="/sign-up">Create an account.</Link></p>
                {/* Social sign in */}
                <div>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
                        <p className='px-2 mt-2'>or</p>
                        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
                    </div>
                    <div>
                        <button className='signin-btn'> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /> Google Sign In</button>
                        <br />
                        {/* <button className='signin-btn mt-2 mb-3'> <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-2_5.png?itok=IlsUnu37" alt="" /> Github Sign In</button> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;