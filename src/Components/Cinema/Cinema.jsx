import React from 'react'
import style from '../Cinema/Cinema.module.css'

function Cinema() {
  return (
    <div>
       <div className={style.section}>
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <div className={style.read}>
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        <div className={style.email}>
        <label >Email adress</label>
        <input type="email"  />
        <button>Get Started  &gt;</button>
        </div>
      

        </div>
    </div>
  )
}

export default Cinema
