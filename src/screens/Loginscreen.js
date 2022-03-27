import React, { useState } from 'react'
import './Loginscreen.css'
import SignupScreen from './SignupScreen';
function Loginscreen() {
    const [signIn,setSignIn]=useState(false);
  return (
    <div className='loginscreen'>
        <div className='loginscreen_background'>
            <img className='loginscreenlogo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt=''/>
        </div>
        <button onClick={()=>setSignIn(true)} className='login_button'>Sign in</button>
      <div className='loginscreen_gradient' >

      </div>
      <div className='loginscreen_body'>
          {signIn ?(
              <SignupScreen/>
          ):(
            <>
            <h1>Unlimited films, TV programes and More.</h1>
            <h2>Watch anyware , cancel at any time</h2>
            <h3>Rady to watch ? Enter your email to create or restart your mebership</h3>

            <div className='loginscreen_input'>
                <form>
                    <input type="email" placeholder="Email Adresses" />
                    <button onClick={()=> setSignIn(true)} className='started'>GET STARTED</button>
                </form>
            </div>
          </>

          )}
          
      </div>
    </div>
  )
}

export default Loginscreen
