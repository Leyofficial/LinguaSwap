import React from 'react';
import style from './HeaderBlock.module.scss'
import defaultImage from "../../../../images/member.png";
import test from "../../../../images/test.png";

const HeaderBlock = ({course}) => {
   return (
      <>
         <header className={style.courseHeader}>
            <img src={course.course.image ? course.course.image : defaultImage} alt={'course'}/>
            <div className={style.language}>
               <p>{course.course.language}</p>
            </div>
         </header>

         <figure className={style.authorWrapper}>
            <img src={test} alt={'author'}/>
            <figcaption className={style.nameOfAuthor}>
               <p>{course.teacher.name}</p>
            </figcaption>
         </figure>
      </>
   );
};

export default HeaderBlock;