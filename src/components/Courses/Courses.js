import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import SingleCard from './SingleCard/SingleCard';



const Courses = () => {
    const[cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data));
        
    },[]);
    return (
        <div className='my-5 container'>
            <h2 className='mt-5'>Popular Courses</h2>
            <div className='row g-4 '>
               {
                   cards.map(card=>(<SingleCard key={card.id} card={card}></SingleCard>))
               }
            </div>
            <button className='button p-2 text-white border-0 mb-3 mt-0'>
                <Link to="/courses">View More Courses</Link>
            </button>
            
        </div>
    );
};

export default Courses;