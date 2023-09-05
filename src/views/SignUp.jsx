import React,{ useContext } from 'react'
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.svg';
import rectangle from '../assets/rectangle.png';
import polygon from '../assets/Polygon.png';
import { UseUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  const { logIn,resetEmailHelper,resetPwdHelper,emailError,pswError,emailHelp,pswHelp,resetUserHelper,resetConfirmPswHelper,userHelp,userError,confPswHelp,confPswError } = useContext(UseUserContext);

  const redirectHome = () => {
    navigate('/')
  }


  return (
    <div className='logIn'>
      <img className="polygon" src={polygon} alt="" />
      <img className='rectangle' src={rectangle} alt="" />
      <div className='logIn_logoContainer'>
        <img src={logo} alt="" />
        <h2 className='font-mobile-20'>Viví una experiencia única</h2>
      </div>
      <div className='logIn_inputsContainer'>
        <h3 className='font-mobile-18'>Regístrate</h3>
        <Input label={"Nombre de usuario"} typeOfInput={"text"} helper={userHelp} error={userError} disabled={false} classes={"logInInput inputUser"} handleChange={resetUserHelper} />
        <Input label={"Correo electrónico"} typeOfInput={"text"} helper={emailHelp} error={emailError} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
        <Input label={"Contraseña"} typeOfInput={"password"} helper={pswHelp} error={pswError} disabled={false} classes={"logInInput inputPassword"} handleChange={resetPwdHelper} />
        <Input label={"Confirmación de contraseña"} typeOfInput={"password"} helper={confPswHelp} error={confPswError} disabled={false} classes={"logInInput inputConfirmPassword"} handleChange={resetConfirmPswHelper} />
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => logIn('signUp',redirectHome)} />
        <Button number={2} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => navigate("/logIn")} />
      </div>
    </div>
  )
}

export default SignUp