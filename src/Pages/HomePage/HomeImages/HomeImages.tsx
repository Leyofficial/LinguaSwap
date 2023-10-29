import style from './HomeImages.module.scss'
import firstImage from "../../../images/HomePage/first.png";
import secondImage from "../../../images/HomePage/second.png";
import thirdImage from "../../../images/HomePage/third.png";

const HomeImages = () => {
  return (
    <div className={style.containerImages}>
      <div className={style.firstImage}>
        <img alt={"home-image"} src={firstImage} />
      </div>
      <div className={style.secondImage}>
        <img alt={"home-image"} src={secondImage} />
      </div>
      <div className={style.thirdImage}>
        <img alt={"home-image"} src={thirdImage} />
      </div>
    </div>
  );
};

export default HomeImages;