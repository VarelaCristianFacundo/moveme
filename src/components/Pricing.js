import React from 'react';
import {Link} from 'react-router-dom'
import './Pricing.css';

function Pricing(props) {
    return (
        <div className='pricing'>
            <div className="card-container">
                <div className="card">
                    <h3>6 Meses de entrenamiento Presencial</h3>
                    <span className="bar"></span>
                    <p className='btc'>$30.000</p>
                    <p>- Corrección Postural -</p>
                    <p>- Ayuda Permanente -</p>
                    <p>- Seguimiento Continuo -</p>
                    <p>- Control de Peso -</p>
                    <p>- Horarios Flexibles -</p>
                    <Link to='/contact' className='btn'>Comprar</Link>

                </div>
                <div className="card">
                    <h3>12 Meses de entrenamiento Presencial</h3>
                    <span className="bar"></span>
                    <p className='btc'>$50.000</p>
                    <p>- Corrección Postural -</p>
                    <p>- Ayuda Permanente -</p>
                    <p>- Seguimiento Continuo -</p>
                    <p>- Control de Peso -</p>
                    <p>- Horarios Flexibles -</p>
                    <Link to='/contact' className='btn'>Comprar</Link>

                </div>
                <div className="card">
                    <h3>6 Meses de entrenamiento Online</h3>
                    <span className="bar"></span>
                    <p className='btc'>$20.000</p>
                    <p>- Corrección Postural -</p>
                    <p>- Ayuda Permanente -</p>
                    <p>- Seguimiento Continuo -</p>
                    <p>- Control de Peso -</p>
                    <p>- Horarios Flexibles -</p>
                    <Link to='/contact' className='btn'>Comprar</Link>

                </div>
                <div className="card">
                    <h3>6 Meses de entrenamiento Online</h3>
                    <span className="bar"></span>
                    <p className='btc'>$30.000</p>
                    <p>- Corrección Postural -</p>
                    <p>- Ayuda Permanente -</p>
                    <p>- Seguimiento Continuo -</p>
                    <p>- Control de Peso -</p>
                    <p>- Horarios Flexibles -</p>
                    <Link to='/contact' className='btn'>Comprar</Link>

                </div>
            </div>
            
        </div>
    );
}

export default Pricing;