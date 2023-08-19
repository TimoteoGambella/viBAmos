import React from 'react'
import '../styles/components/menu.scss'
import logoAzul from '../assets/icons/BAAzul.svg'

const Menu = () => {
  return (
    <div className='menu'>
      <div>
        <img src={logoAzul} alt="" />
        <button className='closeMenu'><i></i></button>
      </div>
      <div>
        <img src="" alt="" />
        <h2>¡Hola de nuevo, María!</h2>
      </div>
      <ul>
        <li>Inicio</li>
        <li>Eventos</li>
        <li>Sobre nosotros</li>
        <li>FAQs</li>
        <li>Perfil</li>
      </ul>
      <button><i></i>Cerrar sesión</button>
    </div>
  )
}

export default Menu