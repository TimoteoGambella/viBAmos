import React,{ useState } from 'react'
import '../styles/components/menu.scss'
import logoAzul from '../assets/icons/BAAzul.svg'
import profile from '../assets/fondos/profile.jpeg'
import yellowCircle from '../assets/fondos/EllipseYellow.png'

const Menu = ({ menuClass,controlMenu }) => {

  return (
    <div className={controlMenu ? 'menuClose' : 'menu'}>
      {/* <img className='yellowCircle' src={yellowCircle} alt="" /> */}
      {/* <div className='figuresContainer'>
      </div> */}
      <div className='menuLogo'>
        <img src={logoAzul} alt="" />
        <button className='closeMenuBtn' onClick={menuClass}><i></i></button>
      </div>
      <div className='menuProfile'>
        <img src={profile} alt="" />
        <h2>¡Hola de nuevo, María!</h2>
      </div>
      <ul className='menuList'>
        <li>Inicio</li>
        <li>Eventos</li>
        <li>Sobre nosotros</li>
        <li>FAQs</li>
        <li>Perfil</li>
      </ul>
      <button className='menuSignOut'><i></i>Cerrar sesión</button>
    </div>
  )
}

export default Menu