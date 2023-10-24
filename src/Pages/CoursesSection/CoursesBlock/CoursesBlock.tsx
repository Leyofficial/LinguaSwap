import style from './CoursesBlock.module.scss'
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.js";
import {NavLink} from "react-router-dom";
import HeaderBlock from "./HeaderBlock/HeaderBlock.js";
import FooterBlock from "./FooterBlock/FooterBlock.js";
import {ICourse} from "../courseType.ts";

export interface ICourseProps {
    course:ICourse
}
const CoursesBlock = (props:ICourseProps) => {
    const {course} = props

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
           <p className={style.duration}>{course.course.durationCourse}</p>
          </div>
          <FooterBlock course={course}></FooterBlock>
        </section>
      </section>
      </NavLink>
    </article>
  );
};

export default CoursesBlock;