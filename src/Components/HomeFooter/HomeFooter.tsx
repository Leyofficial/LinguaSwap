import style from './HomeFooter.module.scss'
import {LiaTelegramPlane} from "react-icons/lia";
import {BiLogoInstagram, BiLogoTwitter} from "react-icons/bi";
import logoImage from '../../img/icons/ukraine.png'
import NetworkItem from "./NetworkItem/NetworkItem.js";
import {scrollUp} from "../../Utility/ScrollUp/ScrollUp.jsx";

const HomeFooter = () => {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div onClick={scrollUp}>
                    <h2 className={style.logo}>Lin<span>gua</span></h2>
                    <img src={logoImage} alt={'logo'}/>
                </div>
                <div className={style.copy}><p>Copyright© 2023 LinguaSwap</p></div>

                <div className={style.wrapperIcons}>
                    <NetworkItem path={'https://t.me/temcenko'}
                                 icon={<LiaTelegramPlane></LiaTelegramPlane>}></NetworkItem>
                    <NetworkItem path={'https://www.instagram.com/'}
                                 icon={<BiLogoInstagram></BiLogoInstagram>}></NetworkItem>
                    <NetworkItem path={'https://twitter.com/'} icon={<BiLogoTwitter></BiLogoTwitter>}></NetworkItem>
                </div>
            </div>
            <div className={style.copyMB}>
                <p>Copyright© 2023 LinguaSwap</p>
            </div>

        </div>
    );
};


export default HomeFooter;