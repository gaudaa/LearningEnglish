import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef } from 'react'

export const Login = () => {

    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')

    const confirmationResult = useRef();
    const recaptchaVerifier = useRef();

    const auth = getAuth();
    auth.languageCode = 'mn';

useEffect(() => {
       const auth = getAuth();
       recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth);
}, [])


const codeAwah = async() => {
    const phoneNumber = number;
    const appVerifier = recaptchaVerifier.current;

    const auth = getAuth();
    confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    console.log(number)
    setNumber('')
}


const Submit = async() => {
     console.log(await confirmationResult.current.confirm(code));

}

    return (
      <div>
        <input placeholder="phone number" onChange={(e)=> setNumber(e.target.value)} ></input>
        <button onClick={codeAwah}> Code awah</button>
        <input placeholder="code" onChange={(e)=> setCode(e.target.value)} ></input>
        <button onClick={Submit} > Submit </button>
        <div id="recaptcha-container"></div>
      </div>
    );
  }
  
  
  
  