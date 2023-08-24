import React,{ useState } from 'react'
import logo from '../assets/icons/BABlanco.svg';
import '../styles/components/header.scss'
import Menu from './Menu';

const Header = () => {

  const [button] = useState('buttonMenu');
  const [controlMenu,setControlMenu] = useState(true);

  const activeMenu = () => {
    setControlMenu(!controlMenu);
  }

  return (
    <>
      <Menu menuClass={activeMenu} controlMenu={controlMenu} />
      <div className='header'>
        <button className={button} onClick={activeMenu}>
        </button>
        <img src={logo} alt="" />
      </div>
    </>
  )
}

export default Header