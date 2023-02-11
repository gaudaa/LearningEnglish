import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../firebase'
import "./login.css"

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
      <div className="main">
        <div className="logb">
          <div className="signd">
            <p className="signl">Sign up</p>
            <p className="tet">Login to manage your account</p>
          </div>
          <div className="numcode">
            <div>
              <input
                className="num"
                placeholder="phone number"
                onChange={(e)=> setNumber(e.target.value)}
                ></input>
              <button
                className="numb"
                onClick={codeAwah}
                >
                Sent
              </button>
            </div>
            <div>
              <input
                className="code"
                placeholder="code"
                onChange={(e)=> setCode(e.target.value)}
                ></input>
              <Link to={'/test'}>
                <button
                  className="codeb"
                  onClick={Submit}
                  >
                  Submit
                </button>
              </Link>
            </div>
            <div className="check">
              <input className="checkbox" type={"checkbox"}></input>
              <p className="rem">Remember me</p>
            </div>
          </div>
          <div id="recaptcha-container"></div>
        </div>
        <div className="dcf">
          <div className="dontc">
            <p className="dont">Don't have an account? </p>
            <p className="create">Create your account?</p>
          </div>
          <p className="forgot">Forgot password?</p>
        </div>
      </div>
    )
  }
