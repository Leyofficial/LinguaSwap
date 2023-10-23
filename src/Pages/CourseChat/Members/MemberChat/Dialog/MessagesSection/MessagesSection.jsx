import React, {useEffect, useState} from 'react';
import style from './MessagesSection.module.scss'
import Message from "../Message/Message.jsx";
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import {useSelector} from "react-redux";

const MessagesSection = (props) => {
   const {title, name, messages, sendMessageHandler, scroll,idCourse} = props

   const [message, setMessage] = useState("")
   const newSocket = useSelector((state) => state.socket)
   const currentUser = useSelector((state) => state.loginUser)
   // const [typingUserName, setTypingUserName] = useState(null)
   const [waitResponse,setWaitResponse] = useState(false)
   const submitHandler = () => {
      if(messages && !waitResponse){
         sendMessageHandler(message,setWaitResponse)
         setMessage("")
      }else{
         console.log('wait for response')
      }

      // setTypingUserName(null)
   }

   const handlerTextArea = (e) => {

      if (e.key === "Enter" && message) {
         sendMessageHandler(message)
         setMessage("")
      }
   }

   const handlerChangeTextarea = (e) => {
      setMessage(e.target.value)
      // newSocket.emit("typing", currentUser.user)
   }

   // useEffect(() => {
   //    if (newSocket)
   //       newSocket.on("userTyping", (user) => {
   //          // setTypingUserName(user)
   //       })
   // }, [])
   return (
      <div className={style.wrapperChat}>
         {idCourse ?  <h2><span>{name}</span> {title}</h2> : <h2><span></span></h2>}
         <div className={style.contentMessage}>
            <div className={style.wrapperMessages}>
               {idCourse ?    <Message messages={messages} scroll={scroll}></Message> : <div className={style.showDefault}>
                  <h3>Select a course to start messaging</h3>
               </div>}

            </div>
         </div>
         <div className={style.wrapperTextarea}>
            <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
            <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={message} onKeyPress={handlerTextArea} onChange={handlerChangeTextarea}></textarea>
                  {/*<textarea placeholder={typingUserName ? `${typingUserName.data.name} typing message` : 'Type a message'} value={message} onKeyPress={handlerTextArea}*/}

            </div>

            <div className={style.icons}>
               <LuSend  className={!message ? style.disableSubmit : null} onClick={submitHandler} fontSize={40} color={'rgba(12,87,197,0.98)'}></LuSend>
            </div>

         </div>
      </div>
   );
};

export default MessagesSection;