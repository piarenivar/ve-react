import { Link } from 'react-router-dom';
import './About.css';
import Hrh2 from './Hrh2';

export default function About() {

    return (
        <section id='about' className='flex'>
            <div className='flex column'>
                <h2 className='flex center'><Hrh2 />Nosotros</h2>
                <p>Desde nuestros inicios en Chihuahua, hemos ayudado a clientes nacionales y transnacionales a desarrollar proyectos industriales, comerciales y residenciales dentro de la República Mexicana. Trabajamos con cualquier tipo de edificio, estructura y cimentación especial; siendo expertos con códigos y manuales de construcción internacionales optimizando los recursos de nuestros clientes y brindándoles seguridad estructural.</p>
            </div>
            <Link to='/nosotros' className='about-image flex'>
                <div className='black-bg'></div>
                <h2>Residencia Altozano 1, CUU</h2>
            </Link>
        </section>
    );
}; 