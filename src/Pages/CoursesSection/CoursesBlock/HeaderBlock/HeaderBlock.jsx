import React, {useEffect, useState} from 'react';
import style from './HeaderBlock.module.scss'
import defaultImage from "../../../../images/member.png";
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";

const HeaderBlock = ({course}) => {
   const [avatar, setAvatar] = useState("")
   const [avatarCourse,setAvatarCourse] = useState("")
   useEffect(() => {
      if (course) {
         const getAuthorAvatar = async () => {
            const gotAvatar = await getUser(course.teacher.id)

            if (gotAvatar.status === 200) {
               getImageFromServer(gotAvatar.data.user.user.data.photo, setAvatar)
            }

         }
         getImageFromServer(course.course.image,setAvatarCourse)
         getAuthorAvatar()
      }


   }, [course])
   return (
      <>
         <header className={style.courseHeader}>
            <img src={avatarCourse ? avatarCourse : defaultImage} alt={'course'}/>
            <div className={style.language}>
               <p>{course.course.language}</p>
            </div>
         </header>

         <figure className={style.authorWrapper}>
            <img src={avatar ? avatar : ""} alt={'author'}/>
            <figcaption className={style.nameOfAuthor}>
               <p>{course.teacher.name}</p>
            </figcaption>
         </figure>
      </>
   );
};

export default HeaderBlock;