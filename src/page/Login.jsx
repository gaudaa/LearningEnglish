import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../firebase'
import './login.css'

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
      <div className="body">
        <div className="numberd">
          <input
            className="number"
            placeholder="phone number"
            onChange={(e)=> setNumber(e.target.value)}
            ></input>
          <button
            className="numberb"
            onClick={codeAwah}>
            Code awah
          </button>
        </div>
        <div>
          <input
            className="code"
            placeholder="code"
            onChange={(e)=> setCode(e.target.value)} >
          </input>
          <Link to={'/test'}>
            <button
              className="codeb"
              onClick={Submit}>
              Submit
            </button>
          </Link>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    )
  }

