import React, { useContext, useEffect, useState } from 'react';
import style from '../HomeMain/Home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
import {MovieContext} from '../../Home/Context/Context';

function Home() {
  const apiKey = 'f4e041ab';
  const { name } = useContext(MovieContext);
  const [trend, setTrend] = useState([]);
  const [popular, setPopular] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`);
        setTrend(response.data.Search || []);
        setPopular(response.data.Search || []);
        setWatched(response.data.Search || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [name]);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={style.body}>
    <div className={style.section1}>
      <div className={style.image}>
        <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeMZkNnHuV8Y6pFrWEjxEZG8xvjo-JqEJzrBVbBo76pxXC9QOCBcJZZU0KjD8hONdRR6x9QAGgpUZCLr0ljFcZlBS1gjBo-Y5D6-.jpg?r=570' />
      </div>
      <div className={style.movieName}>
        <h2>WEDNESDAY</h2>
        <p><strong>Wednesday</strong> is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles.</p>
      </div>
      <div className={style.icon}>
        <img src="https://cdn-icons-png.flaticon.com/128/5977/5977585.png" />
        <p>8/10</p>
      </div>
      <div className={style.button}>
        <button>Watch</button>
        <div className={style.add}>
          <button>&#43; Add list</button>
        </div>
      </div>
    </div>
    <div className={style.section2}>
      <h2 className={style.head}>Popular on Netflix</h2>
      <Slider {...settings} className={style.slider}>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://my-test-11.slatic.net/p/656fccf93d9bff5c4c12602405ba6e1b.jpg" alt="" />
        </div>
      </Slider>
    </div>
    <div className={style.section2}>
      <h2 className={style.head}>Trending Now</h2>
      <Slider {...settings} className={style.slider}>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>  
         <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>   
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
      </Slider>
    </div>
    <div className={style.section2}>
      <h2 className={style.head}>You watched</h2>
      <Slider {...settings} className={style.slider}>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>  
         <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>   
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
        <div>
          <img className={style.slide} src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1054799-ridleyjonesonesheetsrgbpre-1280.jpg?itok=hozpIap0" alt="" />
        </div>
      </Slider>
    </div>

  

  </div>
)
};


export default Home;
