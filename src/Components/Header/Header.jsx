import React, {useState} from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const[clean,setClean]=useState(false)
   const handleSignClick=()=>{
    setClean(true)
   }
  return (
    <div className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}><Link to={'/cinema'}>Netflix</Link></h2>
        <div className={style.select}>
          <select>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
          <button><Link to={"/sign"}>Sign In</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
