import style from './CoursesBlock.module.scss'
import courseImage from '../../../images/joinImage.png'
import {AiOutlineClockCircle} from "react-icons/ai";
import {PiStudentFill} from "react-icons/pi";
import CustomButton from "../../../Utility/CustomButton/CustomButton.jsx";
import {NavLink} from "react-router-dom";
import {BiCheckDouble} from "react-icons/bi";

const CoursesBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img alt={'course'} src={courseImage}/>
      </div>
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <span>Information course</span>
          <p>ISO/IEC 27001 - Dynamics of Information Security Management System (ISMS)</p>
        </div>
        <div className={style.hours}>
          <p className={style.hour}><AiOutlineClockCircle/>2-3 hrs</p>
          <p className={style.learners}><PiStudentFill></PiStudentFill>33,768 learners</p>
        </div>
        <div className={style.infoWrapper}>
          <h3>You Will Learn How To</h3>
          <ul>
            <li><BiCheckDouble/>Demonstrate the business case for information security</li>
            <li><BiCheckDouble/>Demonstrate the business case for information security</li>
            <li><BiCheckDouble/>Demonstrate the business case for information security</li>
            <li><BiCheckDouble/>Demonstrate the business case for information security</li>
            <li><BiCheckDouble/>Demonstrate the business case for information security</li>
          </ul>
        </div>
        <div className={style.buttons}>
          <NavLink className={style.moreInfo} to={'#'}>More Info</NavLink>
          <NavLink className={style.startLearn} to={'#'}>Start Learning</NavLink>
        </div>
      </div>
    </div>
  );
};

export default CoursesBlock;