import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../firebase'

export const Login = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')

    const confirmationResult = useRef()
    const recaptchaVerifier = useRef()

    const auth = getAuth()
    auth.languageCode = 'mn'



useEffect(() => {

       const auth = getAuth();
       recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth)

}, [])


const codeAwah = async() => {
    const phoneNumber = number;
    const appVerifier = recaptchaVerifier.current;

    const auth = getAuth();
    confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    console.log(number);
    setNumber('');
}


const Submit = async() => {

  console.log(await confirmationResult.current.confirm(code));
  navigate('/home')
}

    return (
      <div style={css.main}>
        <input placeholder="phone number" onChange={(e)=> setNumber(e.target.value)} ></input>
        <button onClick={codeAwah}> Code awah</button>
        <input placeholder="code" onChange={(e)=> setCode(e.target.value)} ></input>
        <Link to={'/test'}><button onClick={Submit} > Submit </button></Link>
        <div id="recaptcha-container"></div>
      </div>
    )
  }


  const css = {

    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      background:"linear-gradient(45deg, lightskyblue, blue)",
    }
  }