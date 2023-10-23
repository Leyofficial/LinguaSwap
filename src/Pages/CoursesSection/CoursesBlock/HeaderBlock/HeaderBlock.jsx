import React, {useEffect, useState} from 'react';
import style from './HeaderBlock.module.scss'
import defaultImage from "../../../../images/member.png";
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";
import {Skeleton} from "@mui/material";

const HeaderBlock = ({course}) => {
   const [avatar, setAvatar] = useState("")
   const [avatarCourse,setAvatarCourse] = useState("")
   const [isLoad,setIsLoad] = useState(false)
   useEffect(() => {
      if (course) {
         const getAuthorAvatar = async () => {
            const gotAvatar = await getUser(course.teacher.id)

            if (gotAvatar.status === 200) {
               getImageFromServer(gotAvatar.data.user.user.data.photo, setAvatar,setIsLoad)
            }

         }
         getImageFromServer(course.course.image,setAvatarCourse)
         getAuthorAvatar()
      }


   }, [course])
   return (
      <>
         <header className={style.courseHeader}>
            {isLoad ? <img src={avatarCourse ? avatarCourse : <Skeleton/>} alt={'course'}/> : <Skeleton  variant="rectangular" width={"100%"} height={200} ></Skeleton>}
            <div className={style.language}>
               <p>{course.course.language}</p>
            </div>
         </header>

         <figure className={style.authorWrapper}>
            {isLoad ? <img src={avatar  ? avatar : ""} alt={'author'}/> : <Skeleton  variant="rectangular" width={50} height={50}/>}
            <figcaption className={style.nameOfAuthor}>
             <p>{course.teacher.name}</p>
            </figcaption>
         </figure>
      </>
   );
};

export default HeaderBlock;