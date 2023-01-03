import React from 'react';
import './Footer.css';
import {FaFacebook,FaInstagram,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
                    
                    <div>
                        <p>Thames 757</p>
                        <h4>Villa Crespo</h4>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>+549-11-3671-0228</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>martinercolano94@gmail.com</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Acerca de mi</h4>
                    <p>
                    Como entrenador personal, mi misión es acompañar a cada persona hacia un estilo de vida más saludable. Cada persona es única, y por ello mi método de trabajo se basa en crear un plan personalizado, a través del cual te acompañaré y guiaré para que aprendas a entrenar y para que vayas mejorando y/o adquiriendo aquellos hábitos que te permitan mejorar tu salud.
                    </p>                    
                    <div className="social">
                        <a href="https://www.facebook.com/martin.ercolano.3" target="blank"><FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/></a>
                        <a href="https://twitter.com/MartinErcolano" target="blank"><FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/></a>
                        <a href="https://www.instagram.com/martinercolano/" target="blank"><FaInstagram size={30} style={{color:'#ffffff',marginRight:'1rem'}}/></a>     
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;