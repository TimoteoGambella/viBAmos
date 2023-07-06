import React,{ useContext,useEffect } from 'react'
import '../styles/LogIn.scss';
import { UseApiContext } from '../context/ApiContext';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.png';
import loadingLogo from '../assets/Loading_icon.gif';
import starImg from '../assets/greenStar.png';
import ellipse from '../assets/Ellipse.png';

const LogIn = () => {

  // const { apiFetch } = useContext(UseApiContext);
  // let data = JSON.stringify({
  //   // id: "12312312jhbdf198273sdsd",
  //   // favs: ["HOLA","CHUA"],
  //   username: "Matias Aguilera",
  //   mail: "aguileramati@gmail.com",
  //   password: "12341234"
  // })

  // useEffect(() => {
  //   apiFetch('register',data).then(data => console.log(data))
  // },[]);


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
        <Input label={"Correo electrónico"} typeOfInput={"text"} error={false} disabled={false} classes={"logInInput"} />
        <Input label={"Contraseña"} typeOfInput={"text"} error={false} disabled={false} classes={"logInInput"} />
        <span><a href="" className='font-mobile-14'>¿Olvidaste tu contraseña?</a></span>
      </div>
      <div className='logIn_buttonsContainer'>
        <Button number={1} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} />
        <Button number={2} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} />
      </div>
    </div>
  )
}

export default LogIn