import style from './CoursesBlock.module.scss'
import {dateOfCourse} from "../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import memberImage from '../../../images/member.png';
import test from '../../../images/test.png'
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.jsx";
import {GiClockwork} from "react-icons/gi";

const CoursesBlock = (props) => {

  const membersDefault = [1, 2, 3]

  const {language, courseTitle, date, members, teacher, level,duration,image} = props

  return (

    <div className={style.container}>
      <div className={style.containerWrapper}>
        <div className={style.courseHeader}>
          <img  src={image} alt={'course'}/>
          <div className={style.language}>
            <p>{language}</p>
          </div>
        </div>
        <div className={style.authorWrapper}>
          <img src={test} alt={'author'}/>
        </div>
        <div className={style.nameOfAuthor}>
          <p>Tamara Petrovna</p>
        </div>
        <div className={style.wrapper}>
          <div className={style.titleWrapper}>
            <h3>{courseTitle}</h3>
          </div>
          <div className={style.members}>
            {<AvatarGroupSection items={membersDefault} image={memberImage}></AvatarGroupSection>}
          </div>
          <div className={style.infoWrapper}>
            <p style={levelEducation(level)}>{level}</p>
            {/*<p>{language}</p>*/}
           <p>{duration}</p>
          </div>
          <div className={style.wrapperLevel}>
            <div>
              <p className={style.startDate}><span className={style.icon}><GiClockwork/>Start</span><span>{date.startDate}</span></p>
              <p className={style.finishDate}><span className={style.icon}><GiClockwork/>End</span><span>{date.finishDate}</span></p>
            </div>
          </div>
          <div className={style.author}>
            <div>{dateOfCourse(date.startDate) ?
              <p className={style.start}>Enrol</p> :
              <p className={style.finish}>Now</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBlock;