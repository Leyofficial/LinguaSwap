import React, {useEffect, useRef, useState} from 'react';
import style from './CourseChat.module.scss'
import {useDispatch} from "react-redux";
import {HiUserGroup} from "react-icons/hi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import CourseTeachers from "./CourseTeacher/CourseTeachers.js";
import CourseMember from "./CourseMembers/CourseMember.js";
import {useParams} from "react-router";
import {GiImbricatedArrows} from "react-icons/gi";
import {getChatThunkCreator, sendMessageThunkCreator} from "../../Redux/Course/Chat/CourseChatReducer.js";
import {getCurrentCourseForChatThunkCreator} from "../../Redux/Course/Chat/currentCourseChatReducer.js";
import AsideInfo from "./AsideInfo/AsideInfo.js";
import {resetCurrentCourseChat} from "../../Redux/Course/Chat/currentCourseChat.js";
import CourseInfo from "./CourseInfo/CourseInfo.js";
import MessagesSection from "./MessagesSection/MessagesSection.js";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import CircularUnderLoad from "../Chat/ChatSingleMessage/LoaderChat/LoaderChat.jsx";
import {AiOutlineArrowRight} from "react-icons/ai";


const CourseChat = () => {

    const dispatch = useDispatch()
    const currentUser = useTypedSelector((state) => state.loginUser)
    const chat = useTypedSelector((state) => state.currentChat)
    const [asideItem, setAsideItem] = useState("teachers")
    const {idCourse} = useParams<string>()
    const [hideInfoBlock, setHideInfoBlock] = useState(true)
    const scroll = useRef<HTMLElement | undefined>()
    const socket = useTypedSelector((state) => state.socket)
    const course = useTypedSelector((state) => state.currentCourseChat)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (idCourse)
            getCurrentCourseForChatThunkCreator(idCourse,setLoad)(dispatch)

    }, [idCourse])

    useEffect(() => {
        if (idCourse)
            getChatThunkCreator(idCourse)(dispatch)
    }, [idCourse])


    const sendMessageHandler = (message: string, waitResponseCallback?: (arg: boolean) => void) => {
        if (waitResponseCallback) {
            waitResponseCallback(true)
        } else {
            return
        }

        const messageData = {
            message: message,
            author: currentUser._id,
            date: new Date()
        }

        if (message && socket) {
            sendMessageThunkCreator(messageData, chat._id, idCourse, waitResponseCallback)(dispatch)
            socket.emit("courseMsg", idCourse)
        } else {
            console.log("Write some text pls ")
        }
    }


    useEffect(() => {
        if (socket) {
            socket.on("courseMsgResponse", (idCourse: string) => {
                if (idCourse) {
                    getChatThunkCreator(idCourse)(dispatch)
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
    }, [])


    return (
        <>
            <div className={style.container}>
                {load ?<CircularUnderLoad/>  :  <MessagesSection idCourse={idCourse} title={"course chat"} name={course?.course.name}
                                 messages={chat?.messages}
                                 sendMessageHandler={sendMessageHandler} scroll={scroll?.current}
                ></MessagesSection>}
                <div className={` ${hideInfoBlock ? style.hide : style.wrapperMebmers}`}>
                    <div className={`${style.hideBlock} ${hideInfoBlock ? style.reverseIcons : null}`}
                         onClick={() => setHideInfoBlock(!hideInfoBlock)}>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                    <div className={style.members}>
                        <div className={style.wrapperItems}>
                            <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'teachers'}
                                       icon={<FaChalkboardTeacher></FaChalkboardTeacher>}></AsideInfo>
                            <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'students'}
                                       icon={<HiUserGroup></HiUserGroup>}></AsideInfo>
                            <AsideInfo asideItem={asideItem} callback={setAsideItem} item={'info'}
                                       icon={<BsInfoCircle></BsInfoCircle>}></AsideInfo>
                        </div>
                        <article className={style.wrapper}>
                            {asideItem === 'teachers' ?
                                <CourseTeachers idCourse={idCourse} teacherId={course?.teacher.id}></CourseTeachers> :
                                asideItem === 'students' ? <div className={style.memberItems}>
                                    <h3>Students</h3>
                                    <div className={style.items}>
                                        {course?.course.members.map((member: string, index: number) => <CourseMember
                                            key={index} idCourse={idCourse}
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