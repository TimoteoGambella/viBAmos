import React from 'react'
import vibamos from '../assets/viBAmos.svg'
import RectangleYellow from '../assets/fondos/RectangleYellow.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={RectangleYellow} alt="" className='rectangleYellow' />
      <img src={vibamos} alt="" className='footerLogo' />
      <div className='footer_body'>
        <div>
          <a href="">
            <i></i><span>Matias Aguilera</span>
          </a>
          <a href="">
            <i></i><span>Timoteo Gambella</span>
          </a>
          <a href="">
            <i></i><span>Diego Villarroel</span>
          </a>
        </div>
        <div>
          <a href="">Inicio</a>
          <a href="">Eventos</a>
          <a href="">Sobre nosotros</a>
          <a href="">FAQs</a>
        </div>
      </div>
    </div>
  )
}

export default Footer