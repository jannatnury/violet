import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img from '../../assets/images/brand-logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Navbar = () => {
    const [user,setUser]=useState({});
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
                // console.log(user);
            }
            else{
                setUser({});
            }           
        });
    },[]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            {/* navbar */}
            <nav className=" navbar navbar-expand-lg navbar-light pb-2 shadow-sm mb-4">
                <div className="container-fluid px-5">
                    {/* Brand logo */}
                    <Link className="navbar-brand " to="/"><img src={img} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* nav links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                            {
                                user?.uid ? (
                                    <li className="nav-item">
                                        <Link  className="nav-link fw-bolder" to="/">Sign Out</Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bolder" to="/sign-in">Sign In</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;