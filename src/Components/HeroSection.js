import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='Hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Book a trip</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>See Reviews</Button>
            </div>
        </div>
    )
}

export default HeroSection;
