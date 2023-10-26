import style from './CoursesBlock.module.scss'
import {levelEducation} from "../../../Utility/CoutryFlag/LevelEducation.js";
import AvatarGroupSection from "./AvatarGroup/AvatarGroup.js";
import {NavLink} from "react-router-dom";
import HeaderBlock from "./HeaderBlock/HeaderBlock.js";
import FooterBlock from "./FooterBlock/FooterBlock.js";
import {ICourse} from "../courseType.ts";
import {Skeleton} from "@mui/material";
import React from "react";
import {FcClock} from "react-icons/fc";
import {GoClockFill} from "react-icons/go";

export interface ICourseProps {
    course:ICourse
    isLoad? : boolean
}
const CoursesBlock = (props:ICourseProps) => {
    const {course , isLoad} = props

  return (
    <article className={style.container}>
      <NavLink to={`/course/${course._id}`}>

      <section className={style.containerWrapper}>
        <HeaderBlock isLoad={isLoad} course={course}></HeaderBlock>

        <section className={style.wrapper}>
          <div className={style.titleWrapper}>
            <h4>{ isLoad ?  course.course.name : <Skeleton variant={'rectangular'} width={150} height={25} />}</h4>
          </div>
          <div className={style.members}>
            {<AvatarGroupSection maxCount={2} items={course.course.members}></AvatarGroupSection>}
          </div>
          <div className={style.infoWrapper}>
            <p style={levelEducation(course.course.level)}>  { isLoad ? course.course.level : <Skeleton variant={'rectangular'} width={70} height={20} />}</p>
              <div className={style.durationInfo}>
                  <GoClockFill></GoClockFill>
                  <p className={style.duration}>{ isLoad ? course.course.durationCourse : <Skeleton variant={'rectangular'} width={50} height={20} />}</p>
                  {/*course.course.durationCourse*/}
              </div>
          </div>
          <FooterBlock isLoad={isLoad}  course={course}></FooterBlock>
        </section>
      </section>
      </NavLink>
    </article>
  );
};

export default CoursesBlock;