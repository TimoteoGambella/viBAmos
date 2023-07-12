import React,{ useContext,useEffect,useState } from 'react'
import '../styles/SignUp.scss';
import { UseApiContext } from '../context/ApiContext';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.png';
import loadingLogo from '../assets/Loading_icon.gif';
import rectangle from '../assets/rectangle.png';
import polygon from '../assets/Polygon.png';
import { UseUserContext } from '../context/UserContext';
const CryptoJS = require("crypto-js");

const SignUp = () => {

  const { apiFetch } = useContext(UseApiContext);
  const { logIn,resetEmailHelper,resetPwdHelper,apiData,emailErrror,pswError,emailHelp,pswHelp } = useContext(UseUserContext);


  useEffect(() => {
    if (apiData.mail === '' || apiData.password === '' || apiData.mail === undefined || apiData.password === undefined) {
      console.log('No hay datos ingresados');
    } else {
      let encriptedId;
      apiFetch('login',JSON.stringify(apiData))
        .then(data => {
          encriptedId = CryptoJS.AES.encrypt(data.data[0]._id,'clave_secreta').toString();
          localStorage.setItem('user',JSON.stringify(apiData))
          console.log(data)
        }
        )
      apiFetch('getUser',JSON.stringify(encriptedId)).then(data => console.log(data))
    }
  },[apiData]);

  return (
    <div className='signUp'>
      <img className="polygon" src={polygon} alt="" />
      <img className='rectangle' src={rectangle} alt="" />
      <div className='logIn_logoContainer'>
        <img src={logo} alt="" />
        <h2 className='font-mobile-20'>Viví una experiencia única</h2>
      </div>
      <div className='logIn_inputsContainer'>
        <h3 className='font-mobile-18'>Regístrate</h3>
        <Input label={"Nombre de usuario"} typeOfInput={"text"} helper={emailHelp} error={emailErrror} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
        <Input label={"Correo electrónico"} typeOfInput={"text"} helper={emailHelp} error={emailErrror} disabled={false} classes={"logInInput inputEmail"} handleChange={resetEmailHelper} />
        <Input label={"Contraseña"} typeOfInput={"password"} helper={pswHelp} error={pswError} disabled={false} classes={"logInInput inputPassword"} handleChange={resetPwdHelper} />
        <Input label={"Confirmación de contraseña"} typeOfInput={"password"} helper={pswHelp} error={pswError} disabled={false} classes={"logInInput inputPassword"} handleChange={resetPwdHelper} />
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={logIn} />
        <Button number={2} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} />
      </div>
    </div>
  )
}

export default SignUp