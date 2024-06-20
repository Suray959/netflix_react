import React,{useState,useContext} from 'react'
import style from '../Sign/Sign.module.css'


function Sign() {

  return (
    <div className={style.body}>
      <div className={style.sign}>
        <h3>Sign In</h3>
        <div className={style.inputs}>
          
          <div className="email">
          <label >Email or mobile</label>
          <input type='email'/>
          </div>
          <div className="password">
          <label htmlFor="">Password</label>
          <input type="password"  />
          </div>
        </div>
        <button>Sign In</button>
        <div className={style.orArea}>
          <h3>OR</h3>
          <button>Use a Sign-In Code</button>
          <p>Forgot password ? </p>
        </div>
        <div className={style.check}>
          <input type="checkbox" />
          <h4>Remember me</h4>
        </div>
        <p>New to Netflix? <strong>Sign up now.</strong>  </p>
      </div>
    </div>
  )
}

export default Sign
