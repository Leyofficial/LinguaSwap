import style from './HomeFooter.module.scss'
import {LiaTelegramPlane} from "react-icons/lia";
import {BiLogoInstagram, BiLogoTwitter} from "react-icons/bi";

const HomeFooter = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div>
          <h2>Lingua</h2>
        </div>

        <p>Copyright© 2023 LinguaSwap</p>
        <div className={style.wrapperIcons}>
          <LiaTelegramPlane></LiaTelegramPlane>
          <BiLogoInstagram></BiLogoInstagram>
          <BiLogoTwitter></BiLogoTwitter>
        </div>
      </div>
    </div>
  );
};


export default HomeFooter;