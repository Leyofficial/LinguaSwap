import React, {useEffect, useRef, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {HiUserGroup} from "react-icons/hi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import CourseTeachers from "./CourseTeacher/CourseTeachers.jsx";
import CourseMember from "./CourseMembers/CourseMember.jsx";
import {useParams} from "react-router";
import {GiImbricatedArrows} from "react-icons/gi";
import {getChatThunkCreator, sendMessageThunkCreator} from "../../Redux/Course/Chat/CourseChatReducer.js";
import {getCurrentCourseForChatThunkCreator} from "../../Redux/Course/Chat/currentCourseChatReducer.js";
import AsideInfo from "./AsideInfo/AsideInfo.jsx";
import {resetCurrentCourseChat} from "../../Redux/Course/Chat/currentCourseChat.js";
import CourseInfo from "./CourseInfo/CourseInfo.jsx";
import MessagesSection from "./MessagesSection/MessagesSection.jsx";


const CourseChat = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.loginUser)
  const chat = useSelector((state) => state.currentChat)
  const [asideItem, setAsideItem] = useState("teachers")
  const {idCourse} = useParams()
  const [hideInfoBlock, setHideInfoBlock] = useState(true)
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


  const sendMessageHandler = (message,waitResponseCallback) => {
    waitResponseCallback(true)
    const messageData = {
      message: message,
      author: currentUser._id,
      date: new Date()
    }

    if (message && socket) {
      dispatch(sendMessageThunkCreator(messageData, chat._id, idCourse,waitResponseCallback))
      socket.emit("courseMsg",idCourse)
    } else {
      console.log("Write some text pls ")
    }
  }


  useEffect(() => {
    if (socket) {
      socket.on("courseMsgResponse", (idCourse) => {
        if (idCourse) {
          dispatch(getChatThunkCreator(idCourse))
        }
      })
    }
  }, [socket])


  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "smooth"})
  }, [chat, scroll])

  useEffect(() => {
    return () => {
      dispatch(resetCurrentCourseChat())
    }
  },[])


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
              <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'teachers'} icon={ <FaChalkboardTeacher></FaChalkboardTeacher>}></AsideInfo>
              <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'students'} icon={ <HiUserGroup></HiUserGroup>}></AsideInfo>
              <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'info'} icon={ <BsInfoCircle></BsInfoCircle>}></AsideInfo>
            </div>
            <article className={style.wrapper}>
              {asideItem === 'teachers' ?
                <CourseTeachers idCourse={idCourse} teacherId={course?.teacher.id}></CourseTeachers> :
                asideItem === 'students' ? <div className={style.memberItems}>
                  <h3>Students</h3>
                  <div className={style.items}>
                    {course?.course.members.map((member, index) => <CourseMember index={index} idCourse={idCourse}
                                                                                        member={member}></CourseMember>)}
                  </div>
                </div> : <CourseInfo></CourseInfo>}
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseChat;