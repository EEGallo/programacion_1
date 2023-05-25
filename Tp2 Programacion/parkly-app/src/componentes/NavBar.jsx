import React from 'react'
import '../stylesheet/NavBar.css'
import logo from '../img/iso.png'

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <a href='./Card.js' className='logo'>
            <img src={logo} alt="Logo" className="logo-image" />
            </a>
        </div>
        <div className='navbar-right'>
            <a href='/' className='nav-button'>Estacionamiento</a>
            <a href='/' className='nav-button'>Ingresar</a>
        </div>
    </nav>
  )
}