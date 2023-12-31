import React from 'react';
import style from "./SelectorSection.module.scss";
import CourseSelect from "../../../CoursesBlock/CreateCourse/ModalCreateCourse/CourseSelect/CourseSelect.js";
import CreateTooltip from "../../CreateTooltip/CreateTooltip.jsx";
import {
   getDurationAC,
   getLanguageAC,
   getLevelAC
} from "../../../../../Redux/Courses/CreateCourseData/createCourseAC.ts";
import {useDispatch} from "react-redux";
import {durationList, languagesList, levelList} from "../../../../../Utility/CreateCourseLists/createCourseLists.js";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector.ts";

const SelectorSection = () => {
   const dispatch = useDispatch()
   const createCourseData = useTypedSelector((state) => state.createCourseData)
   const changeLanguage = (language:string) => {
      dispatch(getLanguageAC(language))
   }
   const changeLevel = (level:string) => {
      dispatch(getLevelAC(level))
   }
   const changeDuration = (duration:string) => {
      dispatch(getDurationAC(duration))
   }


   return (
      <>
         <div className={style.wrapperSelector}>

            <CourseSelect value={createCourseData.language} callback={changeLanguage} items={languagesList}
                          title={'Languages'}></CourseSelect>
            <CreateTooltip description={"Set up language that will learn in this course"}></CreateTooltip>
         </div>
         <div className={style.wrapperSelector}>
            <CourseSelect value={createCourseData.level} callback={changeLevel} items={levelList}
                          title={'Level of Education'}></CourseSelect>
            <CreateTooltip description={"Students will chose course by level of course"}></CreateTooltip>
         </div>
         <div className={style.wrapperSelector}>
            <CourseSelect value={createCourseData.duration} callback={changeDuration} items={durationList}
                          title={'Duration of lesson'}></CourseSelect>
            <CreateTooltip description={"Duration of one lesson on day from the course"}></CreateTooltip>
         </div>
      </>
   )
};

export default SelectorSection;