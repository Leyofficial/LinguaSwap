import React, {useEffect, useState} from 'react';
import style from './SingleCourseChat.module.scss'
import {NavLink} from "react-router-dom";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.ts";
import {Skeleton} from "@mui/material";
import {ICourse} from "../../../../types/coursesTypes.ts";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";

interface ISingleCourseProps{
   course:ICourse,
}
const SingleCourseChat = (props:ISingleCourseProps) => {
   const {course} = props
   const [courseImage, setCourseImage] = useState("")
   const currentCourse = useTypedSelector((state) => state.currentCourseChat)
   const [isLoad,setIsLoad] = useState(false)

   useEffect(() => {

      getImageFromServer(course.course.image,setCourseImage,setIsLoad)

   },[course])

   return (
      <>
         <NavLink to={`/course/chat/${course._id}`}>
            <div
               className={`${style.item} ${currentCourse && currentCourse?._id === course._id ? style.active : ""}`}>
               {isLoad ? <img src={courseImage ? courseImage : ""} alt={'course'}/> : <Skeleton className={style.skeleton} ></Skeleton>}
               <p>{course.course.name}</p>
            </div>
         </NavLink>
      </>
   );
};

export default SingleCourseChat;