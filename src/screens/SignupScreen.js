import React,{useRef} from 'react'
import { auth } from '../Firebase';
import './SignupScreen.css'

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register=(e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);

    }).catch(error =>{
      alert(error.message)
    })
  };

  const signIn=(e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);

    }).catch(error =>{
        alert(error.message)
    })
  }

  return (
    <div className='signupscreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password"/>
        <button type="submit" onClick={signIn}>Sign in</button>
        <h4>
            <span className='gray'>New to Netflix? </span>
            <span className='link' onClick={register}>Sign Up now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
