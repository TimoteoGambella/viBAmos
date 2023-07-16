import React,{ useContext } from 'react'
import '../styles/LogIn.scss';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.png';
import starImg from '../assets/greenStar.png';
import ellipse from '../assets/Ellipse.png';
import { UseUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

  const navigate = useNavigate();
  const { logIn,resetEmailHelper,resetPwdHelper,emailError,pswError,emailHelp,pswHelp } = useContext(UseUserContext);

  const redirectHome = () => {
    navigate('/')
  }

  return (
    <div className='logIn'>
      <img className="ellipse" src={ellipse} alt="" />
      <img className='starImg' src={starImg} alt="" />
      <div className='logIn_logoContainer'>
        <img src={logo} alt="" />
        <h2 className='font-mobile-20'>Viví una experiencia única</h2>
      </div>
      <div className='logIn_inputsContainer'>
        <h3 className='font-mobile-18'>Iniciar sesión</h3>
        <Input label={"Correo electrónico"} typeOfInput={"text"} helper={emailHelp} error={emailError} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
        <Input label={"Contraseña"} typeOfInput={"password"} helper={pswHelp} error={pswError} disabled={false} classes={"logInInput inputPassword"} handleChange={resetPwdHelper} />
        <span className='font-mobile-14' onClick={() => navigate("/getPassword")}>¿Olvidaste tu contraseña?</span>
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => logIn('logIn',redirectHome)} />
        <Button number={2} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => navigate("/signUp")} />
      </div>
    </div>
  )
}

export default LogIn