import React,{ useContext,useState } from 'react'
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.svg';
import polygonPurple from '../assets/polygonPurple.png';
import ellipseAqua from '../assets/ellipse-aqua.png';
import checkIcon from '../assets/check-circle.svg';
import { UseUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


const GetPassword = () => {

  const navigate = useNavigate();
  const { resetEmailHelper,emailError,emailHelp,notifyChangedPassword } = useContext(UseUserContext);



  const closePopover = () => {
    document.querySelector('.popover').setAttribute('class','popover popover-inactive')
    navigate('/logIn')
  }

  return (
    <div className='logIn'>

      <div className="popover popover-inactive">
        <img src={checkIcon} alt="" />
        <div>
          <h4>Correo enviado</h4>
          <p>En caso de existir una cuenta ligada al correo electrónico proporcionado, te llegará un email de recuperación</p>
          <button onClick={closePopover}>Entendido</button>
        </div>
      </div>

      <img className="polygonPurple" src={polygonPurple} alt="" />
      <img className='ellipseAqua' src={ellipseAqua} alt="" />
      <div className='logIn_logoContainer'>
        <img src={logo} alt="" />
        <h2 className='font-mobile-20'>Viví una experiencia única</h2>
      </div>
      <div className='logIn_inputsContainer'>
        <h3 className='font-mobile-18'>Recuperación de contraseña</h3>
        <Input label={"Correo electrónico"} typeOfInput={"text"} helper={emailHelp} error={emailError} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Enviar correo de recuperación"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={notifyChangedPassword} />
        <Button number={2} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => navigate("/logIn")} />
      </div>
    </div>
  )
}

export default GetPassword





