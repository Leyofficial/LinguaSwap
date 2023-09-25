import style from './JoinSection.module.scss'
import joinUs from '../../../images/joinImage.png'
import free from '../../../images/robo.png'
import CustomButton from "../../../Utility/CustomButton/CustomButton.jsx";
const JoinSection = () => {
  return (
    <div className={style.wrapper}>
    <section>
    <div className={style.container}>
      <div className={style.wrapperImage}>
        <img src={joinUs} alt={'start to learn'}/>
      </div>
      <div className={style.wrapperIcon}>
        <img src={free} alt={'start to learn'}/>
      </div>
    </div>

      <div className={style.wrapperInfo}>
        <h1>Hundreds of thousands students join us monthly</h1>
        <p>…and achieve their learning goals.
          With our expert tutors, your goals are closer than ever!</p>

        <CustomButton title={"Start learning"}></CustomButton>
      </div>
    </section>
    </div>
  );
};

export default JoinSection;