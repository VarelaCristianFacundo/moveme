import React from 'react';
import './Training.css';
import {Link} from 'react-router-dom';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

function Training(props) {
    return (
        <div className='training'>
            <div className="left">
                <h1>Training</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat eius autem cupiditate dolorum eligendi, ullam voluptates magnam, velit tenetur quam perspiciatis natus delectus vitae dolor numquam adipisci beatae doloribus qui?</p>
                <Link to='/contact'><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src={img1} width={500}className='img' alt='' />

                    </div>
                    <div className="image-stack bottom">
                        <img src={img2}  width={500} className='img' alt='' />

                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Training;