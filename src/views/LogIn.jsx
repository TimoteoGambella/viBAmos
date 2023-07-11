import React,{ useContext,useEffect,useState } from 'react'
import '../styles/LogIn.scss';
import { UseApiContext } from '../context/ApiContext';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.png';
import loadingLogo from '../assets/Loading_icon.gif';
import starImg from '../assets/greenStar.png';
import ellipse from '../assets/Ellipse.png';
import { UseUserContext } from '../context/UserContext';

const LogIn = () => {


  const { apiFetch } = useContext(UseApiContext);
  const { logIn,resetEmailHelper,resetPwdHelper,apiData,emailErrror,pswError,emailHelp,pswHelp } = useContext(UseUserContext);


  useEffect(() => {
    if (apiData.mail === '' || apiData.password === '' || apiData.mail === undefined || apiData.password === undefined) {
      console.log('No hay datos ingresados');
    } else {
      apiFetch('login',JSON.stringify(apiData))
        .then(data => {
          localStorage.setItem('user',JSON.stringify(apiData))
          console.log(data)
        }
        )
    }
  },[apiData]);

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
        <Input label={"Correo electrónico"} typeOfInput={"text"} helper={emailHelp} error={emailErrror} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
        <Input label={"Contraseña"} typeOfInput={"password"} helper={pswHelp} error={pswError} disabled={false} classes={"logInInput inputPassword"} handleChange={resetPwdHelper} />
        <span><a href="" className='font-mobile-14'>¿Olvidaste tu contraseña?</a></span>
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={logIn} />
        <Button number={2} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} />
      </div>
    </div>
  )
}

export default LogIn