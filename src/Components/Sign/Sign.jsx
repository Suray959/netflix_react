import React,{useState,useContext} from 'react'
import style from '../Sign/Sign.module.css'


function Sign() {

  return (
    <div className={style.body}>
      <div className={style.sign}>
        <h3>Sign In</h3>
        <div className="inputs">
          <div className="email">
          <label >Email or mobile</label>
          <input type='email'/>
          </div>
          <div className="password">
          <label htmlFor=""></label>
          <input type="password"  />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Sign
