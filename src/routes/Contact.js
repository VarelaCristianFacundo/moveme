import React from 'react';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';

function Contact(props) {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='CONTACTAME' text='Enviame tu consulta'/>
            <Form/>
            <Footer/>
            
        </div>
    );
}

export default Contact;