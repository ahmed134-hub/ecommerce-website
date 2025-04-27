import React from 'react'
import './css/loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsinup-login'>Already Have an account <span>Login here</span></p>
        <div className="loginsiunup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing , i agree to the terms of use & privacy policy</p>
        </div>

      </div>
    </div>
  )
}

export default Loginsignup
