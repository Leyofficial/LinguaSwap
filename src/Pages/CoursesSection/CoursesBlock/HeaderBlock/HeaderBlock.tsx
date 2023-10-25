import React, {useEffect, useState} from 'react';
import style from './HeaderBlock.module.scss'
import {getUser} from "../../../../ApiRequests/Courses/AuthUser.js";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";
import {Avatar, Skeleton} from "@mui/material";
import {ICourseProps} from "../CoursesBlock.tsx";

const HeaderBlock = (props:ICourseProps) => {
   const {course , isLoad} = props

   const [avatar, setAvatar] = useState("")
   const [avatarCourse,setAvatarCourse] = useState("")
   const [isLoadAvatarCourse,setIsLoadAvatarCourse] = useState(false)
   const [isLoadAvatarUser,setIsLoadAvatarUser] = useState(false)

   useEffect(() => {
      if (course) {
         const getAuthorAvatar = async () => {
            const gotAvatar = await getUser(course.teacher.id)

            if (gotAvatar.status === 200) {
                getImageFromServer(gotAvatar.data.user.user.data.photo, setAvatar,setIsLoadAvatarUser)
            }

         }
         getImageFromServer(course.course.image,setAvatarCourse,setIsLoadAvatarCourse)
         getAuthorAvatar()
      }


   }, [course])
   return (
      <>
         <header className={style.courseHeader}>
            {isLoadAvatarCourse ? <img src={avatarCourse ? avatarCourse : ""} alt={'course'}/> : <Skeleton  variant="rectangular" width={"100%"} height={150} ></Skeleton>}
            <div className={  style.language}>
               <p>{ isLoad ? course.course.language : <Skeleton variant={'rectangular'} width={50} height={20} />}</p>
            </div>
         </header>

         <figure className={style.authorWrapper}>
            {isLoadAvatarUser ? <Avatar sx={{ height : 70 , width : 70 }} src={avatar  ? avatar : ""} alt={'author'}/> : <Skeleton  variant="circular" width={70} height={70}/>}
            <figcaption className={style.nameOfAuthor}>
             {/*<p>{course.teacher.name}</p>*/}
            </figcaption>
         </figure>
      </>
   );
};

export default HeaderBlock;