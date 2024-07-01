import React, { useContext } from 'react';
import style from '../HomeHeader/HomeHeader.module.css';
import Home from '../HomeMain/Home';
import { MovieContext } from '../../Home/Context/Context';

function HomeHeader() {
  const { setMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    setMovie(e.target.value); 
    
  
  };   

  return (
    <div>
      <div className={style.head}>
        <div className={style.icon}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png" alt="Netflix Icon" />
        </div>
        <div className={style.list}>
          <ul>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
        <div className={style.search}>
          <input onChange={handleChange} type="search" placeholder="Search..." />
          <div className={style.user}>
            <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="User Profile" />
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default HomeHeader;
