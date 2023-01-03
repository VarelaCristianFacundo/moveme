import React from 'react';
import './Training.css';
import {Link} from 'react-router-dom';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

function Training(props) {
    return (
        <div className='training'>
            <div className="left">
                <h1>Entrenamientos</h1>
                <p>Sabemos que puedes lograrlo y lo harás.</p>
                <p>Un Entrenador Personalizado es el partner que te prepara para aquello que parece imposible.</p>
                <p>Con tu entrenador Personalizado creas un plan adaptado a tus necesidades y objetivos en conjunto, trabajarás en equipo para desbloquear los logros que buscas.</p>
                <p>Te acompaña en cada paso, con pasión, profesionalismo y dedicación poniendo todo su conocimiento en ayudarte a lograr lo que buscas.</p>
                <Link to='/contact'><button className="btn">Contactame</button></Link>
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