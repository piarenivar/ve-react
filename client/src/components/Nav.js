import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [menu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav id='nav' className='container flex'>
            <Link to='/' className={menu ? 'nav-logo flex column center logo-invert' : 'nav-logo flex column center'}>Valencia <br /><span>Estructuristas</span></Link>
            <div className={menu ? 'nav-links flex column active' : 'nav-links flex column'}>
                <Link to='/' className='nav-link' onClick={openMenu}>Inicio</Link>
                <Link to='/proyectos' className='nav-link' onClick={openMenu}>Proyectos</Link>
                <Link to='/servicios' className='nav-link' onClick={openMenu}>Servicios</Link>
                <Link to='/nosotros' className='nav-link' onClick={openMenu}>Nosotros</Link>
                <Link to='/contacto' className='nav-link' onClick={openMenu}>Contacto</Link>
            </div>
            <div className='menu flex column' onClick={openMenu}>
                <div className={menu ? 'menu-active line1-active' : 'line1'}></div>
                <div className={menu ? 'menu-active line2-active' : 'line2'}></div>
                <div className={menu ? 'menu-active line3-active' : 'line3'}></div>
            </div>
        </nav>
    );
};