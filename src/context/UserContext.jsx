import { createContext,useState } from "react"

export const UseUserContext = createContext();


export const UserContext = ({ children }) => {

  const [apiData,setApiData] = useState({ mail: '',password: '' });
  const [emailErrror,setEmailError] = useState(false);
  const [pswError,setPswError] = useState(false);
  const [userError,setUserError] = useState(false);
  const [emailHelp,setEmailHelp] = useState('');
  const [pswHelp,setPswHelp] = useState('');
  const [userHelp,setUserHelp] = useState('');


  // Login
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
    } else if (email.match(validRegex) === null) {
      userInfo = { mail: '',password: userInfo.password }
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto')
    } else if (password.match(passw) === null) {
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

  //Register

  const settingUserInfoRegister = (username,email,password,confirmPwd) => {

    let userInfo = { username: '',mail: '',password: '' }

    //Email validation
    const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //Password validation
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (email.match(validRegex) !== null && password.match(passw) !== null && username !== '') {
      userInfo = { username: username,mail: email,password: password }
      setEmailError(false)
      setEmailHelp('')
      setPswError(false)
      setPswHelp('')
      setUserError(false)
      setUserHelp('')
    } else if (email.match(validRegex) === null && password.match(passw) === null && username === '') {
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto')
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
      setUserError(true)
      setUserHelp('Ingrese un usuario')
    }

    if (email.match(validRegex) === null) {
      userInfo = { username: username,mail: '',password: password }
      setEmailError(true)
      setEmailHelp('Ingresa un email correcto')
    }

    if (password.match(passw) === null) {
      userInfo = { username: username,mail: email,password: '' }
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
    }

    if (password.match(passw) !== null) {
      userInfo = { mail: userInfo.mail,password: '' }
      userInfo = { username: '',mail: email,password: password }
      setPswError(true)
      setPswHelp('La contraseña debe incluir una Mayúscula, una minúscula, números y entre 6 a 20 dígitos.')
    }
    return userInfo;
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
        settingUserInfoRegister,
        userError,
        userHelp,
      }}
    >
      {children}
    </UseUserContext.Provider>
  );
};