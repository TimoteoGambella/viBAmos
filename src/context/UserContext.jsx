import { useContext,createContext,useState } from "react"
import { UseApiContext } from './ApiContext';


const CryptoJS = require("crypto-js");
export const UseUserContext = createContext();


export const UserContext = ({ children }) => {

  const { apiFetch,emailJS } = useContext(UseApiContext);

  const [emailError,setEmailError] = useState(false);
  const [pswError,setPswError] = useState(false);
  const [userError,setUserError] = useState(false);
  const [confPswError,setConfPswError] = useState(false);
  const [emailHelp,setEmailHelp] = useState('');
  const [pswHelp,setPswHelp] = useState('');
  const [userHelp,setUserHelp] = useState('');
  const [confPswHelp,setConfPswHelp] = useState('');

  //Email validation
  const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Password validation
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  // Login & Register
  const settingUserInfo = (username,email,password,ConfirmPassword,logOrSign) => {
    let userInfo = logOrSign === 'logIn' ? { mail: '',password: '' } : { username: '',mail: '',email,password: '' }


    if (email.match(validRegex) !== null && (logOrSign === 'logIn' ? password.match(passw) !== null : (password.match(passw) !== null && password === ConfirmPassword)) && (logOrSign === 'logIn' ? true : username !== '')) {
      logOrSign === 'logIn' ? userInfo = { mail: email,password: password } : userInfo = { username: username,mail: email,password: password }
      setEmailError(false)
      setEmailHelp('')
      setPswError(false)
      setPswHelp('')
      setUserError(false)
      setUserHelp('')
      setConfPswError(false)
      setConfPswHelp('')
    } else if (email.match(validRegex) === null && (logOrSign === 'logIn' ? password.match(passw) === null : (password.match(passw) !== null && password !== ConfirmPassword)) && (logOrSign === 'logIn' ? true : username === '')) {
      logOrSign === 'logIn' ? userInfo = { mail: '',password: '' } : userInfo = { username: '',mail: '',password: '' }
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto.')
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
      setUserError(true)
      setUserHelp('Ingrese un usuario.')
      setConfPswError(true)
      setConfPswHelp('Las contraseñas no coinciden.')
    }

    if (email.match(validRegex) === null) {
      logOrSign === 'logIn' ? userInfo = { mail: '',password: password } : userInfo = { username: username,mail: '',password: password }

      setEmailError(true)
      setEmailHelp('Ingresa un email correcto.')
    }

    if (password.match(passw) === null) {
      logOrSign === 'logIn' ? userInfo = { mail: email,password: '' } : userInfo = { username: username,mail: email,password: '' }
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
    }
    if (logOrSign !== 'logIn') {
      if (username === '') {
        userInfo = { username: '',mail: email,password: password }
        setUserError(true)
        setUserHelp('Ingrese un usuario.')
      }
      if (ConfirmPassword !== password || ConfirmPassword === '') {
        userInfo = { username: username,mail: email,password: '' }
        setConfPswError(true)
        setConfPswHelp('Las contraseñas no coinciden.')
      } else {
        setConfPswError(false)
        setConfPswHelp('')
      }

    }
    return userInfo;
  }

  const logIn = (logOrSign,navigate) => {
    let inputUser = document.querySelector('.inputUser') === null ? '' : document.querySelector('.inputUser').children[1].children[0].value;
    let inputEmail = document.querySelector('.inputEmail').children[1].children[0].value;
    let inputPassword = document.querySelector('.inputPassword').children[1].children[0].value;
    let inputConfirmPassword = document.querySelector('.inputConfirmPassword') === null ? '' : document.querySelector('.inputConfirmPassword').children[1].children[0].value;

    let userInfo = settingUserInfo(inputUser,inputEmail,inputPassword,inputConfirmPassword,logOrSign);
    if (logOrSign === 'logIn') {
      //LOGIN
      if (userInfo.mail !== '' && userInfo.password !== '') {
        apiFetch('login',JSON.stringify(userInfo))
          .then(data => {
            if (data.response !== 'failed') {
              let encriptedId = {
                id: CryptoJS.AES.encrypt(data.data[0]._id,'clave_secreta').toString()
              }
              localStorage.setItem('user',JSON.stringify(encriptedId))
              navigate();
            } else {
              if (data.message === 'Usuario no encontrado') {
                setEmailHelp('No se ha encontrado una cuenta asociada a este correo electrónico');
                setEmailError(true);
              } else if (data.message === 'Contraseña incorrecta') {
                setPswHelp('La contraseña ingresada es incorrecta.');
                setPswError(true);
              }
            }
          }
          )
      }
    } else {
      //REGISTER
      if (userInfo.username !== '' && userInfo.mail !== '' && userInfo.password !== '') {
        apiFetch('register',JSON.stringify(userInfo))
          .then(data => {
            if (data.response !== 'failed') {
              let encriptedId = {
                id: CryptoJS.AES.encrypt(data.data._id,'clave_secreta').toString()
              }
              localStorage.setItem('user',JSON.stringify(encriptedId))
              navigate();
            } else {
              if (data.message === 'Mail ya registrado') {
                setEmailHelp('Este email ya se encuentra registrado.');
                setEmailError(true);
              }
            }
          }
          )
      }
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

  const resetUserHelper = () => {
    setUserError(false)
    setUserHelp('')
  }

  const resetConfirmPswHelper = () => {
    setConfPswError(false)
    setConfPswHelp('')
  }

  const notifyChangedPassword = () => {
    const popover = [...document.querySelector('.popover').classList];
    popover.forEach(cls => {
      if (cls === 'popover-inactive') {
        let inputEmail = document.querySelector('.inputEmail').children[1].children[0].value;
        if (inputEmail.match(validRegex)) {
          apiFetch('getUserByMail',JSON.stringify({ mail: inputEmail }))
            .then(user => {
              if (user.response !== 'failed') {
                const data = {
                  nombre: user.data[0].username,
                  contrasena: user.data[0].password,
                  toMail: user.data[0].mail
                }
                emailJS(data)
                document.querySelector('.popover').setAttribute('class','popover popover-active')
              } else {
                document.querySelector('.popover').setAttribute('class','popover popover-active')
              }
            }
            )
        } else {
          setEmailError(true)
          setEmailHelp('Ingresa un email correcto.')
        }
      }
    })
  }

  return (
    <UseUserContext.Provider
      value={{
        settingUserInfo,
        logIn,
        resetEmailHelper,
        resetPwdHelper,
        emailError,
        pswError,
        emailHelp,
        pswHelp,
        userError,
        userHelp,
        resetUserHelper,
        resetConfirmPswHelper,
        confPswError,
        confPswHelp,
        notifyChangedPassword
      }}
    >
      {children}
    </UseUserContext.Provider>
  );
};