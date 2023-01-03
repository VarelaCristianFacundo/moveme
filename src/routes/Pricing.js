import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import PricingCards from '../components/Pricing';

function Pricing(props) {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='PRECIOS' text='Elige tu entrenamiento'/>
            <PricingCards/>
            <Footer/>
            
        </div>
    );
}

export default Pricing;