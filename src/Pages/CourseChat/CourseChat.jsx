import React from 'react';
import style from './CourseChat.module.scss'
import {useSelector} from "react-redux";
import {LuSend, LuSendHorizonal} from "react-icons/lu";
import {CiFaceSmile} from "react-icons/ci";
import bgChat from '../../images/course/bgChat.png'
const CourseChat = () => {

   const currentCourse = useSelector((state) => state.currentCourse)
   console.log(currentCourse)
   return (
      <div className={style.container}>
         <div className={style.wrapperChat} style={{background:`url(${bgChat})`}}>
            <h2>Chat for student from <span>{currentCourse?.course.name}</span> course</h2>
            <div className={style.wrapperTextarea}>

               <textarea placeholder={'Type a message'}></textarea>
               <CiFaceSmile fontSize={30}color={'rgba(71,176,220,0.43)'} ></CiFaceSmile>
               <LuSend fontSize={30} color={'rgba(71,176,220,0.43)'}></LuSend>
            </div>

         </div>

         <div className={style.wrapperMebmers}>
            <div>
               Teachers
            </div>
            <div>
               Students
            </div>


         </div>
      </div>
   );
};

export default CourseChat;