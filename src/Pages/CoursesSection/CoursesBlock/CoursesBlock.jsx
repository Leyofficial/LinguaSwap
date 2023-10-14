import style from './CoursesBlock.module.scss'
import {dateOfCourse} from "../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import memberImage from '../../../images/member.png';
import test from '../../../images/test.png'
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.jsx";
import {GiClockwork} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import defaultImage from '../../../images/member.png'


const CoursesBlock = ({course}) => {


  const membersDefault = [1, 2, 3,4]

  return (
    <article className={style.container}>
      <NavLink to={`/course/${course._id}`}>
      <div className={style.containerWrapper}>
        <div className={style.courseHeader}>
          <img  src={course.course.image ? course.course.image : defaultImage} alt={'course'}/>
          <div className={style.language}>
            <p>{course.course.language}</p>
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
            <h3>{course.course.name}</h3>
          </div>
          <div className={style.members}>
            {<AvatarGroupSection maxCount={2} items={membersDefault} image={memberImage}></AvatarGroupSection>}
          </div>
          <div className={style.infoWrapper}>
            <p style={levelEducation(course.course.level)}>{course.course.level}</p>
           <p className={style.duration}>{course.course.duration}</p>
          </div>
          <div className={style.wrapperLevel}>
            <div>
              <p className={style.startDate}><span className={style.icon}><GiClockwork/>Start</span><span>{course.course.startCourse}</span></p>
              <p className={style.finishDate}><span className={style.icon}><GiClockwork/>End</span><span>{course.course.finishCourse}</span></p>
            </div>
          </div>
          <div className={style.author}>
            <div>{dateOfCourse(course.course.startCourse) ?
              <p className={style.start}>Enrol</p> :
              <p className={style.finish}>Now</p>}</div>
          </div>
        </div>
      </div>
      </NavLink>
    </article>
  );
};

export default CoursesBlock;