import style from './HomePage.module.scss'
import {NavLink} from "react-router-dom";
import firstImage  from './assets/first.png'
import secondImage  from './assets/second.png'
import thirdImage  from './assets/third.png'
const HomePage = () => {

  return (
    <div className={style.container}>
      <div className={style.wrapperText}>
        <h1>Open doors with language learning</h1>
        <p>Connect with native speakers around the world for language
          exchange, practice speaking and monitor your progress while having fun!</p>
        <NavLink to={'/'}>Start to learn</NavLink>
      </div>
      <div className={style.containerImages }>
        <div className={style.wrapperImages + " " + style.firstImage}>
          <img alt={'home-image'} src={firstImage}/>
        </div>
        <div className={style.wrapperImages + " " + style.secondImage}>
          <img alt={'home-image'} src={secondImage}/>
        </div>
        <div className={style.wrapperImages + " " + style.thirdImage}>
          <img alt={'home-image'} src={thirdImage}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;