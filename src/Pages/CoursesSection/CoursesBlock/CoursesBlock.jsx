import style from './CoursesBlock.module.scss'
import {dateOfCourse} from "../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.jsx";
import {GiClockwork} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import HeaderBlock from "./HeaderBlock/HeaderBlock.jsx";


const CoursesBlock = ({course}) => {

  return (
    <article className={style.container}>
      <NavLink to={`/course/${course._id}`}>

      <section className={style.containerWrapper}>
        <HeaderBlock course={course}></HeaderBlock>

        <section className={style.wrapper}>
          <div className={style.titleWrapper}>
            <h3>{course.course.name}</h3>
          </div>
          <div className={style.members}>
            {<AvatarGroupSection maxCount={2} items={course.course.members}></AvatarGroupSection>}
          </div>
          <div className={style.infoWrapper}>
            <p style={levelEducation(course.course.level)}>{course.course.level}</p>
           <p className={style.duration}>{course.course.duration}</p>
          </div>

          <section className={style.wrapperLevel}>
            <div>
              <p className={style.startDate}><span className={style.icon}><GiClockwork/>Start</span><span>{course.course.startCourse}</span></p>
              <p className={style.finishDate}><span className={style.icon}><GiClockwork/>End</span><span>{course.course.finishCourse}</span></p>
            </div>
          </section>

          <section className={style.author}>
            <div>{dateOfCourse(course.course.startCourse) ?
              <p className={style.start}>Enrol</p> :
              <p className={style.finish}>Now</p>}</div>
          </section>

        </section>
      </section>
      </NavLink>
    </article>
  );
};

export default CoursesBlock;