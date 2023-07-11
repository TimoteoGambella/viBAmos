import { createContext,useState } from "react"

export const UseUserContext = createContext();


export const UserContext = ({ children }) => {

  const [apiData,setApiData] = useState({ mail: '',password: '' });
  const [emailErrror,setEmailError] = useState(false);
  const [pswError,setPswError] = useState(false);
  const [emailHelp,setEmailHelp] = useState('');
  const [pswHelp,setPswHelp] = useState('');
  const [canLogin,setCanLogin] = useState(false);


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
        canLogin
      }}
    >
      {children}
    </UseUserContext.Provider>
  );
};