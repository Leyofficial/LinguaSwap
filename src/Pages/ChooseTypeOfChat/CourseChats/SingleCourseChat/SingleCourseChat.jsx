import React, {useEffect, useState} from 'react';
import style from './SingleCourseChat.module.scss'
import {NavLink} from "react-router-dom";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";
import {useSelector} from "react-redux";
import {Skeleton} from "@mui/material";

const SingleCourseChat = ({course,setCourses}) => {
   const [courseImage, setCourseImage] = useState("")
   const currentCourse = useSelector((state) => state.currentCourseChat)
   const [isLoad,setIsLoad] = useState(false)

   useEffect(() => {
      getImageFromServer(course.course.image,setCourseImage,setIsLoad)

   },[course])



   return (
      <>
         <NavLink to={`/course/chat/${course._id}`}>
            <div
               className={`${style.item} ${currentCourse && currentCourse?._id === course._id ? style.active : null}`}>
               {isLoad ? <img src={courseImage ? courseImage :  <Skeleton className={style.skeleton} ></Skeleton>} alt={'course'}/> : <Skeleton className={style.skeleton} ></Skeleton>}
               <p>{course.course.name}</p>
            </div>
         </NavLink>
      </>
   );
};

export default SingleCourseChat;