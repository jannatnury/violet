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
            
        </div>
    );
};

export default Courses;