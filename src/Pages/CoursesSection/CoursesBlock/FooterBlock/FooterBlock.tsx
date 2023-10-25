import React from 'react';
import style from './FooterBlock.module.scss'
import {GiClockwork} from "react-icons/gi";
import {dateOfCourse} from "../../../../Utility/CoutryFlag/DateOfCourse/dateOfCourse.js";
import {ICourse} from "../../courseType.ts";
import {MdDateRange} from "@react-icons/all-files/md/MdDateRange";
import {getDateMessage} from "../../../Chat/MainChatHelper/MainChatHelper.ts";
import {getDate} from "../../../../Utility/Date/getDate.ts";
import {Skeleton} from "@mui/material";

interface IFooterProps{
    course:ICourse
    isLoad? : boolean
}
const FooterBlock = (props:IFooterProps) => {
    const {course , isLoad} = props
   return (
      <>
         {/*<section className={style.wrapperLevel}>*/}
         {/*   <div>*/}
         {/*      <p className={style.startDate}><span*/}
         {/*         className={style.icon}><GiClockwork/>Start</span><span>{course.course.startCourse}</span></p>*/}
         {/*      <p className={style.finishDate}><span*/}
         {/*         className={style.icon}><GiClockwork/>End</span><span>{course.course.finishCourse}</span></p>*/}
         {/*   </div>*/}
         {/*</section>*/}
          <section className={style.date}>
              <div className={style.dateWrapper}>
                  <MdDateRange fontSize={'25px'} color={'dodgerblue'}></MdDateRange>
                  <p  style={{color : 'black' , fontStyle : 'italic'}}> { isLoad ?  getDate(course.course.startCourse) + ' - ' + getDate(course.course.finishCourse) : <Skeleton variant={'rectangular'} width={150} height={20} />}</p>
              </div>
          </section>

         <section className={style.author}>
            <div>{dateOfCourse(course.course.startCourse) ?
               <p> { isLoad ? 'Enrol' : <Skeleton variant={'rectangular'} width={70} height={20} />  }</p> :
               <p>{isLoad ?  'Now' : <Skeleton variant={'rectangular'} width={70} height={20} /> } </p>}
            </div>
         </section>
      </>
   );
};

export default FooterBlock;