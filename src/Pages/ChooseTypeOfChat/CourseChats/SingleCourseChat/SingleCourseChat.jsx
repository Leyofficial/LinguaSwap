import React, {useEffect, useState} from 'react';
import style from './SingleCourseChat.module.scss'
import {NavLink} from "react-router-dom";
import {getImageFromServer} from "../../../../ApiRequests/ServerFiles/getImage.js";
import {useSelector} from "react-redux";

const SingleCourseChat = ({course}) => {
   const [courseImage, setCourseImage] = useState("")
   const currentCourse = useSelector((state) => state.currentCourseChat)
   console.log(course)
   useEffect(() => {
      getImageFromServer(course.course.image,setCourseImage)

   },[course])

   return (
      <>
         <NavLink to={`/course/chat/${course._id}`}>
            <div
               className={`${style.item} ${currentCourse && currentCourse?._id === course._id ? style.active : null}`}>
               <img src={courseImage ? courseImage : ""} alt={'course'}/>
               <p>{course.course.name}</p>
            </div>
         </NavLink>
      </>
   );
};

export default SingleCourseChat;