import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import SingleCard from '../Courses/SingleCard/SingleCard';
import Feedback from '../Feedback/Feedback';
import './Home.css';

const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, []);
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className='container mx-auto my-5 row g-4 '>
                    {
                        cards.slice(0, 3).map(card => (<SingleCard key={card.id} card={card}></SingleCard>))
                    }
                </div>
                <button className='button p-2 text-white border-0 mb-3 mt-0'>
                    <Link to="/courses">View More Courses</Link>
                </button>
            </div>
            <ChooseUs></ChooseUs>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;