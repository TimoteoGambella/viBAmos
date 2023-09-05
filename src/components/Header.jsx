import React,{ useState } from 'react'
import logoWhite from '../assets/icons/BABlanco.svg';
import logoBlue from '../assets/icons/BAAzul.svg';
import Menu from './Menu';

const Header = ({ type,btnColor }) => {

  const buttonInicio = 'buttonMenu'
  const buttonGray = 'buttonMenu btnGray'

  const [controlMenu,setControlMenu] = useState(true);

  const activeMenu = () => {
    setControlMenu(!controlMenu);
  }

  return (
    <>
      <Menu menuClass={activeMenu} controlMenu={controlMenu} />
      <div className='header'>
        {btnColor === 'inicio'
          ?
          <button className={buttonInicio} onClick={activeMenu}>
          </button>
          :
          <button className={buttonGray} onClick={activeMenu}>
          </button>
        }
        <img src={type === 'inicio' ? logoWhite : logoBlue} alt="" />
      </div>
    </>
  )
}

export default Header