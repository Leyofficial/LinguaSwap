import React, {useEffect, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {LuSend} from "react-icons/lu";
import {CiFaceSmile} from "react-icons/ci";
import bgChat from '../../images/course/chat/backChat.png'
import {getUser} from "../../ApiRequests/Courses/AuthUser.js";
import MemberChat from "./Members/MemberChat/MemberChat.jsx";
import {AiOutlinePaperClip} from "react-icons/ai";
import {GiImbricatedArrows} from "react-icons/gi";
import {getChat, sendMessage} from "../../ApiRequests/Chat.jsx";
import {courseChatAC} from "../../Redux/Course/Chat/CourseChatAC.js";
import Message from "./Members/MemberChat/Dialog/Message/Message.jsx";



const CourseChat = () => {

   const currentCourse = useSelector((state) => state.currentCourse)
   const [currentCourseTeacher, setCurrentCourseTeacher] = useState(null)
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.loginUser)
   const [message, setMessage] = useState("")
   const [openList, setOpenList] = useState(false)
   const chat = useSelector((state) => state.currentChat)
   const [authorAvatar,setAuthorAvatar] = useState("")



   useEffect(() => {
      getChat(currentCourse._id).then(res => {
         if (res.status === 200) {
            dispatch(courseChatAC(res.data.chatRoom))
         }
      }).catch(err => console.log(err))

      getUser(currentCourse.teacher.id).then(res => {
         if (res.status === "Succeed") {
            setCurrentCourseTeacher(res.user)
         }
      })
   }, [currentCourse])



   const sendMessageHandler = () => {

      const messageData = {
         message: message,
         author: currentUser._id,
         date: new Date()
      }

      if (message) {
         sendMessage(messageData, chat._id).then(res => {
            if (res.status === 200) {
               setMessage("")
               getChat(currentCourse._id).then(res => {
                  if (res.status === 200) {
                     dispatch(courseChatAC(res.data.chatRoom))
                  }
               }).catch(err => console.log(err))
            }
         }).catch(err => console.log(err))
      } else {
         console.log("Write some text pls ")
      }
   }

   return (
      <div className={style.container}>
         <div className={style.wrapperChat}>
            <h2><span>{currentCourse?.course.name}</span> course chat </h2>
            <div className={style.contentMessage} style={{background: `url(${bgChat})`}}>
               <div className={style.wrapperMessages}>
                  {chat?.messages.map(item => <Message message={item}></Message>)}
               </div>
            </div>
            <div className={style.wrapperTextarea}>
               <AiOutlinePaperClip></AiOutlinePaperClip>
               <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
               </div>

               <div className={style.icons}>
                  <CiFaceSmile fontSize={30} color={'rgba(71,176,220,0.43)'}></CiFaceSmile>
                  <LuSend onClick={sendMessageHandler} fontSize={30} color={'rgba(71,176,220,0.43)'}></LuSend>
               </div>

            </div>
         </div>

         <div className={style.wrapperMebmers}>

            <div className={style.members}>
               <div>
                  <p>Teacher</p>
                  <div className={style.teacherWrapper}>
                     <img src={`../../../${currentCourseTeacher?.user.data?.photo}`} alt={'avatar'}/>
                     <p>{currentCourseTeacher?.user.data.name}</p>
                  </div>
               </div>
               <div>
                  <p onClick={() => setOpenList(!openList)}>Students<GiImbricatedArrows
                     className={!openList ? style.arrowUp : null}></GiImbricatedArrows></p>

                  <div className={`${style.membersWrapper} ${!openList ? style.hiddenMembers : null}`}>
                     {currentCourse?.course.members.map((member, index) => <MemberChat member={member}></MemberChat>)}
                  </div>


               </div>

            </div>


         </div>
      </div>
   );
};

export default CourseChat;