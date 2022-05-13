import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
                       
                        {
                            user?.uid ? (
                                <li className="nav-item">
                                    <Link onClick={handleSignout} className="nav-link fw-bolder" to="/">Sign Out</Link>
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