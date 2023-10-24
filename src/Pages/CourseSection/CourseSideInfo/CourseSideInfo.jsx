import React from 'react';
import style from './CourseSideInfo.module.scss'
import {countryFlag} from "../../../Utility/CoutryFlag/CountryFlag.js";
import {ImageLevelEducation} from "../../../Utility/ImageLevelEducation/imageLevelEducation.js";
import duration from "../../../images/course/duration.png";
import startCourseDate from "../../../images/course/startDate.png";
import finishCourseDate from "../../../images/course/finishDate.png";
import AvatarGroupSection from "../../CoursesSection/CoursesBlock/AvatarGroup/AvatarGroup.tsx";
import SideItem from "./SideItem/SideItem.jsx";

const CourseSideInfo = ({currentCourse}) => {
   return (
      <div className={style.wrapperSideInfo}>
         <SideItem title={currentCourse?.course.language} path={countryFlag(currentCourse?.course.language)}></SideItem>
         <SideItem title={currentCourse?.course.level}
                   path={ImageLevelEducation(currentCourse?.course.level)}></SideItem>
         <SideItem title={"Duration of lesson " + currentCourse?.course.durationCourse} path={duration}></SideItem>
         <div className={style.containerDate}>
            <div>
               <SideItem title={currentCourse?.course.startCourse} path={startCourseDate}></SideItem>
            </div>
            <div>
               <SideItem title={currentCourse?.course.finishCourse} path={finishCourseDate}></SideItem>
            </div>

         </div>
         <div className={style.members}>
            <h3>Registered Students </h3>
            <AvatarGroupSection maxCount={8} items={currentCourse?.course.members}></AvatarGroupSection>
         </div>
      </div>
   );
};

export default CourseSideInfo;