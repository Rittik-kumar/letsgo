import React from 'react';
import CardItem from './CardItem';
import'./Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations </h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem src='images/img-1.jpg' text='Explore the beauty of mountains' label='Adventure' path='/services' />
                        <CardItem src='images/img-1.jpg' text='Explore the beauty of mountains' label='Adventure' path='/services' />
                        <CardItem src='images/img-1.jpg' text='Explore the beauty of mountains' label='Adventure' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
