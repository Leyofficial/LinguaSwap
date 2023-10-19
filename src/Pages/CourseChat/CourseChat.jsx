import React, {useEffect, useRef, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addSocketMessage} from "../../Redux/Course/Chat/CourseChatAC.js";
import {HiUserGroup} from "react-icons/hi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import CourseTeachers from "./CourseTeacher/CourseTeachers.jsx";
import CourseMember from "./CourseMembers/CourseMember.jsx";
import {useParams} from "react-router";
import {GiImbricatedArrows} from "react-icons/gi";
import MessagesSection from "./Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {getChatThunkCreator, sendMessageThunkCreator} from "../../Redux/Course/Chat/CourseChatReducer.js";
import {getCurrentCourseForChatThunkCreator} from "../../Redux/Course/Chat/currentCourseChatReducer.js";


const CourseChat = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.loginUser)
  const chat = useSelector((state) => state.currentChat)
  const [asideItem, setAsideItem] = useState("teachers")
  const {idCourse} = useParams()
  const [hideInfoBlock, setHideInfoBlock] = useState(false)
  const scroll = useRef()
  const socket = useSelector((state) => state.socket)
  const course = useSelector((state) => state.currentCourseChat)


  useEffect(() => {
    if (idCourse)
      dispatch(getCurrentCourseForChatThunkCreator(idCourse))

  }, [idCourse])

  useEffect(() => {
    if (idCourse)
      dispatch(getChatThunkCreator(idCourse))
  }, [idCourse])


  const sendMessageHandler = (message) => {

    const messageData = {
      message: message,
      author: currentUser._id,
      date: new Date()
    }
    if (message && socket) {

      socket.emit("message", messageData)
      dispatch(sendMessageThunkCreator(messageData, chat._id, idCourse))

    } else {
      console.log("Write some text pls ")
    }
  }


  useEffect(() => {
    if (socket) {
      socket.on("response", (data) => {
        if (data) {
          dispatch(addSocketMessage(data))
        }

      })
    }

  }, [socket])


  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "smooth"})
  }, [chat, scroll])


  return (
    <>
    <div className={style.container}>
        <MessagesSection idCourse={idCourse} title={"course chat"} name={course?.course.name} messages={chat?.messages}
                         sendMessageHandler={sendMessageHandler} scroll={scroll}
        ></MessagesSection>

        <div className={` ${hideInfoBlock ? style.hide : style.wrapperMebmers}`}>
          <div className={`${style.hideBlock} ${hideInfoBlock ? style.reverseIcons : null}`}
               onClick={() => setHideInfoBlock(!hideInfoBlock)}>
            <GiImbricatedArrows></GiImbricatedArrows>
          </div>
          <div className={style.members}>
            <div className={style.wrapperItems}>
              <div className={`${style.wrapperIconsMember} ${asideItem === "teachers" ? style.activeItem : null}`}
                   onClick={() => setAsideItem("teachers")}>
                <FaChalkboardTeacher></FaChalkboardTeacher>
              </div>
              <div className={`${style.wrapperIconsMember} ${asideItem === "students" ? style.activeItem : null}`}
                   onClick={() => setAsideItem("students")}>
                <HiUserGroup></HiUserGroup>
              </div>
              <div className={`${style.wrapperIconsMember} ${asideItem === "info" ? style.activeItem : null}`}
                   onClick={() => setAsideItem("info")}>
                <BsInfoCircle></BsInfoCircle>
              </div>
            </div>
            <article className={style.wrapper}>
              {asideItem === 'teachers' ?
                <CourseTeachers idCourse={idCourse} teacherId={course?.teacher.id}></CourseTeachers> :
                asideItem === 'students' ? <div className={style.memberItems}>
                  <h3>Students</h3>
                  <div className={style.items}>
                    {course?.course.members.map((member, index) => <CourseMember index={index}
                                                                                        member={member}></CourseMember>)}
                  </div>
                </div> : <div className={style.memberItems}>
                  <h3>INFO</h3>
                  <div className={style.items}>
                    <div>Will be develop in the future</div>
                  </div>
                </div>
              }
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseChat;