import React from 'react';
import style from './CourseChat.module.scss'
import {useSelector} from "react-redux";
import {LuSend} from "react-icons/lu";
import {CiFaceSmile} from "react-icons/ci";
import bgChat from '../../images/course/chat/favoriteBG.png'
import {getUser} from "../../ApiRequests/Courses/AuthUser.js";
import MemberChat from "./Members/MemberChat/MemberChat.jsx";
const CourseChat = () => {

   const currentCourse = useSelector((state) => state.currentCourse)

   console.log(currentCourse)

   return (
      <div className={style.container}>
         <div className={style.wrapperChat}>
            <h2><span>{currentCourse?.course.name}</span> course  chat </h2>
            <div className={style.contentMessage} style={{background:`url(${bgChat})`}}>


            </div>
            <div className={style.wrapperTextarea}>

               <textarea placeholder={'Type a message'}></textarea>
               <CiFaceSmile fontSize={30}color={'rgba(71,176,220,0.43)'} ></CiFaceSmile>
               <LuSend fontSize={30} color={'rgba(71,176,220,0.43)'}></LuSend>
            </div>

         </div>

         <div className={style.wrapperMebmers}>

            <div className={style.members}>
              <div>
                <p>Teachers</p>
              </div>
              <div>
                <p>Members</p>
                <ul>
                  {currentCourse.course.members.map((member,index) => <MemberChat member={member}></MemberChat> )}
                </ul>
              </div>

            </div>



         </div>
      </div>
   );
};

export default CourseChat;