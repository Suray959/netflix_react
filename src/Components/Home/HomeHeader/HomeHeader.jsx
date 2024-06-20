import React from 'react'
import style from '../HomeHeader/HomeHeader.module.css'

function HomeHeader() {
  return (
    <div>
      <div className={style.head}>
        <div className={style.icon}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png" />
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
         <input type="search" />
         <div className={style.user}>
          <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" />
        </div>
         </div>
      
      </div>
    </div>
  )
}

export default HomeHeader
