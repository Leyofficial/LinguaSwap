import React, {useState} from 'react';
import style from './MessagesSection.module.scss'
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";
import Messages from "./Messages/Messages.jsx";

const MessagesSection = (props) => {

   const {title, name, messages, sendMessageHandler, scroll,idCourse} = props
   const [message, setMessage] = useState("")
   const [waitResponse,setWaitResponse] = useState(false)

   const submitHandler = () => {

      if(message && !waitResponse && idCourse){
         sendMessageHandler(message,setWaitResponse)
         setMessage("")
      }else{
         console.log('wait for response')
      }
   }
   const handlerTextArea = (e) => {

      if (e.key === "Enter" && message && idCourse) {
         sendMessageHandler(message)
         setMessage("")
      }
   }
   const handlerChangeTextarea = (e) => {
      setMessage(e.target.value)
   }
   return (
      <div className={style.wrapperChat}>
         {idCourse ?  <h2><span>{name}</span> {title}</h2> : <h2><span></span></h2>}
         <div className={style.contentMessage}>
            <div className={style.wrapperMessages}>
               {idCourse ?    <Messages messages={messages} scroll={scroll}></Messages> : <div className={style.showDefault}>
                  <h3>Select a course to start messaging</h3>
               </div>}

            </div>
         </div>
         <div className={style.wrapperTextarea}>
            <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
            <div className={style.textarea}>
               <textarea placeholder={'Type a message'} value={message} onKeyPress={handlerTextArea} onChange={handlerChangeTextarea}></textarea>
            </div>
            <div className={style.icons}>
               <LuSend  className={!message ? style.disableSubmit : null} onClick={submitHandler} fontSize={40} color={'rgba(12,87,197,0.98)'}></LuSend>
            </div>

         </div>
      </div>
   );
};

export default MessagesSection;