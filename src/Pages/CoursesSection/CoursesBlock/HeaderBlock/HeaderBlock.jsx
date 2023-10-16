import React, {useEffect, useState} from 'react';
import style from './HeaderBlock.module.scss'
import defaultImage from "../../../../images/member.png";
import test from "../../../../images/test.png";
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";

const HeaderBlock = ({course}) => {
   const [avatar,setAvatar] = useState(null)
   console.log(course)
   useEffect(() => {
      const getAuthorAvatar = async () => {
         const gotAvatar = await getUser(course.teacher.id)
         console.log(gotAvatar)
         if(gotAvatar.status === "Succeed"){
            setAvatar(gotAvatar.user.user.data.photo)
         }

      }
      getAuthorAvatar()

   },[course])
   return (
      <>
         <header className={style.courseHeader}>
            <img src={course.course.image ? course.course.image : defaultImage} alt={'course'}/>
            <div className={style.language}>
               <p>{course.course.language}</p>
            </div>
         </header>

         <figure className={style.authorWrapper}>
            <img src={avatar ? `../../../../${avatar}` : test} alt={'author'}/>
            <figcaption className={style.nameOfAuthor}>
               <p>{course.teacher.name}</p>
            </figcaption>
         </figure>
      </>
   );
};

export default HeaderBlock;