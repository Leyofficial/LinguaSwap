import React from 'react';
import style from './FooterBlock.module.scss'
import {GiClockwork} from "react-icons/gi";
import {dateOfCourse} from "../../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import {ICourse} from "../../courseType.ts";

interface IFooterProps{
    course:ICourse
}
const FooterBlock = (props:IFooterProps) => {
    const {course} = props
   return (
      <>
         <section className={style.wrapperLevel}>
            <div>
               <p className={style.startDate}><span
                  className={style.icon}><GiClockwork/>Start</span><span>{course.course.startCourse}</span></p>
               <p className={style.finishDate}><span
                  className={style.icon}><GiClockwork/>End</span><span>{course.course.finishCourse}</span></p>
            </div>
         </section>

         <section className={style.author}>
            <div>{dateOfCourse(course.course.startCourse) ?
               <p>Enrol</p> :
               <p>Now</p>}
            </div>
         </section>
      </>
   );
};

export default FooterBlock;