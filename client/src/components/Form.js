import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Hrh2 from './Hrh2';

export default function Form() {
    const url = 'http://localhost:3000/exito';
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post(url, { fname: fname, lname: lname, tel: tel, email: email, state: state, subject: subject, message: message });
            console.log(res.data)
        } catch (error) {
            console.log(error.response)
        }

        setFname('');
        setLname('');
        setTel('');
        setEmail('');
        setState('');
        setSubject('');
        setMessage('');
        setToast(!toast);
    }

    const rmToast = () => {
        setToast(!toast);
    }

    return (
        <section id='form' className='flex column'>
            <h2 className='flex center'><Hrh2 />Reserva tu proyecto</h2>
            <form className='flex wrap' onSubmit={handleSubmit}>
                <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Primer nomber' required />
                <input type='text' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Apellido' required />
                <input type='tel' value={tel} onChange={(e) => setTel(e.target.value)} placeholder='Número de teléfono' required />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                <input type='text' value={state} onChange={(e) => setState(e.target.value)} placeholder='Estado' required />
                <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Asunto' required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Mensaje' required />
                <button type="submit" className='submit flex center'>Enviar</button>
            </form>
            <div className={toast ? 'toast flex center toast-active' : 'toast flex center'} onClick={rmToast}>
                <p>Su formulario ha sido enviado<i className="fa-lg fa-regular fa-circle-check"></i></p>
            </div>
        </section>
    );
}; 