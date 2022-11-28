import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import PricingCards from '../components/Pricing';

function Pricing(props) {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='PRICING' text='Choose your training'/>
            <PricingCards/>
            <Footer/>
            
        </div>
    );
}

export default Pricing;