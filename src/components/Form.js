import React from 'react';
import './Form.css';

function Form(props) {
    return (
        <div className='form'>
            <form>
                <label>Nombre</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Asunto</label>
                <input type="text"></input>
                <label>Consulta</label>
                <textarea rows="6" placeholder='Escribime tu consulta'/>
                <button className="btn">Enviar</button>
            </form>
            
        </div>
    );
}

export default Form;