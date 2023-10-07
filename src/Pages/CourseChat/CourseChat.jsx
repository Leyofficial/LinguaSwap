import React from 'react';
import style from './CourseChat.module.scss'
import {useSelector} from "react-redux";
import {LuSend} from "react-icons/lu";
import {CiFaceSmile} from "react-icons/ci";
import bgChat from '../../images/course/chat/backChat.png'
import {getUser} from "../../ApiRequests/Courses/AuthUser.js";
import MemberChat from "./Members/MemberChat/MemberChat.jsx";
import Dialog from "./Members/MemberChat/Dialog/Dialog.jsx";
import {AiOutlinePaperClip} from "react-icons/ai";
import avatar from '../../images/HomePage/second.png'

const CourseChat = () => {

   const currentCourse = useSelector((state) => state.currentCourse)

   console.log(currentCourse)
   const messages = [{
      author: 'Vova',
      message: 'Jello, how are you ?',
      date: '07.10.2023',
      me: true
   },
      {
         author: 'Sasha',
         message: 'I`m fine , thank you ',
         date: '07.10.2023',
         me: false
      }, {
         author: 'Vova',
         message: 'Jello, how are you ?',
         date: '07.10.2023',
         me: true
      },
      {
         author: 'Sasha',
         message: 'I`m fine , thank youI`m fine , thank youI`m fine , thank you ',
         date: '07.10.2023',
         me: false
      },
      {
         author: 'Sasha',
         message: 'I`m fine , thank youI`m fine , thank youI`m fine , thank you ',
         date: '07.10.2023',
         me: false
      },
      {
         author: 'Sasha',
         message: 'I`m fine , thank youI`m fine , thank youI`m fine , thank you ',
         date: '07.10.2023',
         me: false
      },
      {
         author: 'Sasha',
         message: 'I`m fine , thank youI`m fine , thank youI`m fine , thank you ',
         date: '07.10.2023',
         me: false
      },
      {
         author: 'Vova',
         message: 'Jello, how are you ?',
         date: '07.10.2023',
         me: true
      },
      {
         author: 'Vova',
         message: 'Jello, how are you ?',
         date: '07.10.2023',
         me: true
      }]

   return (
      <div className={style.container}>
         <div className={style.wrapperChat}>
            <h2><span>{currentCourse?.course.name}</span> course chat </h2>
            <div className={style.contentMessage} style={{background: `url(${bgChat})`}}>
               <div className={style.wrapperMessages}>
                  {messages.map(message => <div className={message.me ? style.myMessage : style.message}>
                     <img src={avatar}/>
                     <div className={style.messageItems}>
                        <p>{message.message}</p>
                        <span>{message.date}</span>
                     </div>

                  </div>)}
               </div>
            </div>
            <div className={style.wrapperTextarea}>
               <AiOutlinePaperClip></AiOutlinePaperClip>
               <div className={style.textarea}>
                  <textarea placeholder={'Type a message'}></textarea>
               </div>

               <div className={style.icons}>
                  <CiFaceSmile fontSize={30} color={'rgba(71,176,220,0.43)'}></CiFaceSmile>
                  <LuSend fontSize={30} color={'rgba(71,176,220,0.43)'}></LuSend>
               </div>

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
                     {currentCourse.course.members.map((member, index) => <MemberChat member={member}></MemberChat>)}
                  </ul>
               </div>

            </div>


         </div>
      </div>
   );
};

export default CourseChat;