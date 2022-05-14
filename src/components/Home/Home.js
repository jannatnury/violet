import React from 'react';
import Banner from '../Banner/Banner';
import CheckOut from '../CheckOut/CheckOut';
import ChooseUs from '../ChooseUs/ChooseUs';
import Courses from '../Courses/Courses';
import Feedback from '../Feedback/Feedback';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <ChooseUs></ChooseUs>
            <Feedback></Feedback>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Home;