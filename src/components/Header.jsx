import React,{ useState } from 'react'
import logo from '../assets/viBAmosBlanco.svg';
import '../styles/components/header.scss'

const Header = () => {

  const [menu,setMenu] = useState('menu');

  const activeMenu = () => {
    menu === 'menu' ? setMenu('menu-active') : setMenu('menu')
  }

  return (
    <div className='header'>
      <button className={menu} onClick={activeMenu}>
      </button>
      <img src={logo} alt="" />
    </div>
  )
}

export default Header