import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo256.png';
import cuu from '../images/cuu256.png';
import veritas from '../images/veritas256.png';

export default function Footer() {

    return (
        <footer id='footer'>
            <div className='container flex column'>
                <div className='flex'>
                    <div className='footer-links flex column'>
                        <h3>Mapa</h3>
                        <Link to='/' className='flex center'>Inicio</Link>
                        <Link to='/proyectos' className='flex center'>Proyectos</Link>
                        <Link to='/servicios' className='flex center'>Servicios</Link>
                        <Link to='/nosotros' className='flex center'>Nosotros</Link>
                        <Link to='/contacto' className='flex center'>Contacto</Link>
                    </div>
                    <div className='footer-links flex column'>
                        <h3>Información</h3>
                        <Link to='/privacidad' className='flex center'>Privacidad</Link>
                    </div>
                    <div className='footer-socials flex'>
                        <a href='https://www.facebook.com/profile.php?id=100086400811442' target='_blank' rel='noreferrer' className='flex center'><i className="fa-xl fa-brands fa-facebook-f"></i></a>
                        <a href='https://www.instagram.com/valenciaestructuristas/' target='_blank' rel='noreferrer' className='flex center'><i className="fa-xl fa-brands fa-instagram"></i></a>
                        <a href='https://www.tiktok.com/@valenciaestructuristas?_t=8VxVE1UTJvJ&_r=1' target='_blank' rel='noreferrer' className='flex center'><i className="fa-xl fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
                <div className='footer-middle flex'>
                    <Link to='/' className='flex center'><img src={logo} alt='Valencia Estructuristas Logo' className='footer-logo' /></Link>
                    <div>
                        <img src={cuu} alt='' className='footer-logos' />
                        <img src={veritas} alt='' className='footer-logos' />
                    </div>
                </div>
                <div className='footer-bottom flex'>
                    <p>Derechos © Valencia Estructuristas</p>
                    <a href='https://piarenivar.github.io/' target='_blank' rel='noreferrer'>Developed By Pablo Arenivar</a>
                </div>
            </div>
        </footer>
    );
};