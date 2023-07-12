import { createContext,useState } from "react"

export const UseUserContext = createContext();


export const UserContext = ({ children }) => {

  const [apiData,setApiData] = useState({ mail: '',password: '' });
  const [emailErrror,setEmailError] = useState(false);
  const [pswError,setPswError] = useState(false);
  const [userError,setUserError] = useState(false);
  const [confPswError,setConfPswError] = useState(false);
  const [emailHelp,setEmailHelp] = useState('');
  const [pswHelp,setPswHelp] = useState('');
  const [userHelp,setUserHelp] = useState('');
  const [confPswHelp,setConfPswHelp] = useState('');


  // Login
  const settingUserInfo = (username,email,password,ConfirmPassword,logOrSign) => {
    let userInfo = logOrSign === 'logIn' ? { mail: '',password: '' } : { username: '',mail: '',email,password: '' }

    //Email validation
    const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //Password validation
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

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
      }
    }
    return userInfo;
  }

  const logIn = (logOrSign) => {
    let inputUser = document.querySelector('.inputUser') === null ? '' : document.querySelector('.inputUser').children[1].children[0].value;
    let inputEmail = document.querySelector('.inputEmail').children[1].children[0].value;
    let inputPassword = document.querySelector('.inputPassword').children[1].children[0].value;
    let inputConfirmPassword = document.querySelector('.inputConfirmPassword') === null ? '' : document.querySelector('.inputConfirmPassword').children[1].children[0].value;

    let userInfo = settingUserInfo(inputUser,inputEmail,inputPassword,inputConfirmPassword,logOrSign);

    if (logOrSign === 'logIn') {
      if (userInfo.mail !== '' && userInfo.password !== '') {
        setApiData(userInfo);
      }
    } else {
      if (userInfo.username !== '' && userInfo.mail !== '' && userInfo.password !== '') {
        setApiData(userInfo);
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

  return (
    <UseUserContext.Provider
      value={{
        settingUserInfo,
        logIn,
        resetEmailHelper,
        resetPwdHelper,
        apiData,
        emailErrror,
        pswError,
        emailHelp,
        pswHelp,
        userError,
        userHelp,
        resetUserHelper,
        resetConfirmPswHelper,
        confPswError,
        confPswHelp
      }}
    >
      {children}
    </UseUserContext.Provider>
  );
};