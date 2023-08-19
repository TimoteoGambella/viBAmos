import React,{ useState } from 'react'
import logo from '../assets/icons/BABlanco.svg';
import '../styles/components/header.scss'
import Menu from './Menu';

const Header = () => {

  const [button,setButton] = useState('button');

  const activeMenu = () => {
    button === 'button' ? setButton('button-active') : setButton('button')
  }

  return (
    <>
      <Menu />
      <div className='header'>
        <button className={button} onClick={activeMenu}>
        </button>
        <img src={logo} alt="" />
      </div>
    </>
  )
}

export default Header