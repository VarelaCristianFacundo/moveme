import React from 'react';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrainingSection from '../components/Training';

function Training(props) {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='TRAINING' text='Cardio & Weight Training.' />
            <TrainingSection />
            <Footer/>
        </div>
    );
}

export default Training;