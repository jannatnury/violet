import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Feedback from '../Feedback/Feedback';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;