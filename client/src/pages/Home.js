import { Link } from 'react-router-dom';
import './Home.css';
import About from '../components/About';
import Projectslider from '../components/Project-slider';
import Contactinfo from '../components/Contact-info';
import Form from '../components/Form';
import Intro from '../components/Intro';

export default function Home() {
    return (
        <section id='main' className='container flex column'>
            <Intro />
            <div className='main-top flex'>
                <h1>Diseñamos<br /><span>Estructura</span></h1>
                <div className='main-links flex center'>
                    <a href='#projects'>Proyectos</a>
                    <a href='#contact'>Contacto</a>
                </div>
            </div>
            <Link to='/proyectos' className='hero flex'>
                <div className='black-bg'></div>
                <h2>Proyecto Majalca, CUU</h2>
            </Link>
            <About />
            <Projectslider />
            <Contactinfo />
            <Form />
        </section>
    );
}; 