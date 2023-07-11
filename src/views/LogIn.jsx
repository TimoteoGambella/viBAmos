import React,{ useContext,useEffect,useState } from 'react'
import '../styles/LogIn.scss';
import { UseApiContext } from '../context/ApiContext';
import Input from '../components/inputs/Input';
import Button from '../components/buttons/Button';
import logo from '../assets/viBAmos.png';
import loadingLogo from '../assets/Loading_icon.gif';
import starImg from '../assets/greenStar.png';
import ellipse from '../assets/Ellipse.png';

const LogIn = () => {
  const [apiData,setApiData] = useState({ mail: '',password: '' });
  const [emailErrror,setEmailError] = useState(false);
  const [pswError,setPswError] = useState(false);
  const [emailHelp,setEmailHelp] = useState('');
  const [pswHelp,setPswHelp] = useState('');
  const [canLogin,setCanLogin] = useState(false);


  const { apiFetch } = useContext(UseApiContext);


  const settingUserInfo = (email,password) => {

    let userInfo = { mail: '',password: '' }

    //Email validation
    const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //Password validation
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (email.match(validRegex) !== null && password.match(passw) !== null) {
      userInfo = { mail: email,password: password }
      setEmailError(false)
      setEmailHelp('')
      setPswError(false)
      setPswHelp('')
    } else if (email.match(validRegex) === null && password.match(passw) === null) {
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto')
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
    }

    if (email.match(validRegex) === null) {
      userInfo = { mail: '',password: userInfo.password }
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto')
    }

    if (password.match(passw) === null) {
      userInfo = { mail: userInfo.mail,password: '' }
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
    }
    return userInfo;
  }


  const logIn = () => {
    let inputEmail = document.querySelector('.inputEmail').children[1].children[0].value;
    let inputPassword = document.querySelector('.inputPassword').children[1].children[0].value;

    let userInfo = settingUserInfo(inputEmail,inputPassword);

    if (userInfo.mail !== '' && userInfo.password !== '') {
      setApiData(userInfo);
    }

  }

  const resetEmailHelper = () => {
    setEmailError(false)
    setEmailHelp('')
  }

  const resetPwdHelper = () => {
    setPswError(false)
    setPswHelp('')
  }

  useEffect(() => {
    let storageUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { mail: '',password: '' };
    if (storageUser.mail !== '' && storageUser.password !== '') {
      apiFetch('login',JSON.stringify(storageUser)).then(data => console.log(data))
    } else if (apiData.mail === '' || apiData.password === '' || apiData.mail === undefined || apiData.password === undefined) {
      console.log('No hay datos ingresados');
    } else {
      console.log(apiData);
      apiFetch('login',JSON.stringify(apiData)).then(data => console.log(data))
      localStorage.setItem('user',JSON.stringify(apiData))
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