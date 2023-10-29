import React, {useState} from 'react';
import style from './MessagesSection.module.scss'
import {AiOutlineArrowLeft, AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import Messages from "./Messages/Messages.js";
import {ColorRing} from "react-loader-spinner";
import {useNavigate} from "react-router-dom";
import {HiOutlineDotsVertical} from "react-icons/hi";
import CourseTeachers from "../CourseTeacher/CourseTeachers.tsx";
import CourseMember from "../CourseMembers/CourseMember.tsx";
import {ICourse} from "../../../types/coursesTypes.ts";
import {TiInfoLarge} from "@react-icons/all-files/ti/TiInfoLarge";

export interface IMessage {
    author: string,
    date: string,
    message: string,
    _id: string
}

interface IMessagesProps {
    title: string,
    name: string,
    messages: IMessage[],
    sendMessageHandler: (arg: string, func?: (arg: boolean) => void) => void,
    scroll: any,
    idCourse: string | undefined,
    teacherId:string,
    course:ICourse
}

const MessagesSection = (props: IMessagesProps) => {

    const {title, name, messages, sendMessageHandler, scroll, idCourse,teacherId,course} = props
    const [message, setMessage] = useState("")
    const [waitResponse, setWaitResponse] = useState(false)
    const navigate = useNavigate()
    const [showItems,setShowItems] = useState<boolean>(false)
    const submitHandler = () => {

        if (message && !waitResponse && idCourse) {
            sendMessageHandler(message, setWaitResponse)
            setMessage("")
        } else {
            console.log('wait for response')
        }
    }
    const handlerTextArea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key === "Enter" && message && idCourse) {
            sendMessageHandler(message)
            setMessage("")
        }
    }
    const handlerChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const moveBackHandler = () => {
        navigate(-1)
    }

    const moveToInfo = () => {
        navigate(`/course/chat/${idCourse}/info`)
    }
    return (
        <div className={style.wrapperChat}>
            <div className={style.headerChat}><AiOutlineArrowLeft onClick={moveBackHandler}></AiOutlineArrowLeft>
            {idCourse ? <h2><span>{name}</span> {title}</h2> : <h2><span></span></h2>}
                <TiInfoLarge onClick={moveToInfo} style={{fontSize:"25px"}}></TiInfoLarge>
                <div className={style.listItems}>
                    <HiOutlineDotsVertical onClick={() => setShowItems(!showItems)} style={{fontSize:"30px"}}></HiOutlineDotsVertical>
                    <div className={ showItems ? style.showItems : style.hideItems}>
                       <CourseTeachers idCourse={idCourse} teacherId={teacherId}></CourseTeachers>
                        <div className={style.memberItems}>
                            <h3>Students</h3>
                        <div className={style.items}>
                            {course?.course.members.map((member: string, index: number) => <CourseMember
                                key={index} idCourse={idCourse}
                                member={member}></CourseMember>)}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.contentMessage}>
                <div className={style.wrapperMessages}>
                    {idCourse ? <Messages messages={messages} scroll={scroll}></Messages> :
                        <div className={style.showDefault}>
                            <h3>Select a course to start messaging</h3>
                        </div>}

                </div>
            </div>
            <div className={style.wrapperTextarea}>
                <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
                <div className={style.textarea}>
                    <textarea placeholder={'Type a message'} value={message} onKeyPress={(e) => handlerTextArea(e)}
                              onChange={handlerChangeTextarea}></textarea>
                </div>
                <div className={style.icons}>
                    {waitResponse ? <div className={style.waitResponse}><ColorRing
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={["dodgerblue", "dodgerblue", "dodgerblue", "dodgerblue", "dodgerblue"]}
                        /></div> :
                        <LuSend className={!message ? style.disableSubmit : ""} onClick={submitHandler} fontSize={40}
                                color={'rgba(12,87,197,0.98)'}></LuSend>}
                </div>

            </div>
        </div>
    );
};

export default MessagesSection;