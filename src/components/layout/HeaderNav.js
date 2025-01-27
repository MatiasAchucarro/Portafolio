import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderNav.css'
export const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <span>M</span>
                    <h3>Matias Achucarro WEB</h3>
                </div>
                
                <button 
                    className='menu-toggle' 
                    onClick={toggleMenu}
                    aria-label='Toggle navigation menu'
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><NavLink to="/inicio" onClick={toggleMenu}>Inicio</NavLink></li>
                        <li><NavLink to="/portafolio" onClick={toggleMenu}>Portafolio</NavLink></li>
                        <li><NavLink to="/curriculum" onClick={toggleMenu}>Curriculum</NavLink></li>
                        <li><NavLink to="/contacto" onClick={toggleMenu}>Contacto</NavLink></li>
                        <li><NavLink to="/servicio" onClick={toggleMenu}>Servicio</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
