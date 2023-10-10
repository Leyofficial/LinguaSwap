import React, {useState} from 'react';
import style from './MessagesSection.module.scss'
import Message from "../Message/Message.jsx";
import {AiOutlinePaperClip} from "react-icons/ai";
import {LuSend} from "react-icons/lu";

const MessagesSection = (props) => {

   const [message,setMessage] = useState("")
   const {title,name,messages,sendMessageHandler} = props

const submitHandler = () => {
   sendMessageHandler(message)
   setMessage("")
}

const handlerTextArea = (e) => {

   if(e.key === "Enter") {
      submitHandler()
   }
}
   return (
      <div className={style.wrapperChat}>
         <h2><span>{name}</span>{title}</h2>
         <div className={style.contentMessage}>
            <div className={style.wrapperMessages}>
               <Message messages={messages}></Message>
            </div>
         </div>
         <div className={style.wrapperTextarea}>
            <AiOutlinePaperClip fontSize={40}></AiOutlinePaperClip>
            <div className={style.textarea}>
                  <textarea placeholder={'Type a message'} value={message} onKeyPress={handlerTextArea}
                            onChange={(e) =>  setMessage(e.target.value)}></textarea>
            </div>

            <div className={style.icons}>
               <LuSend onClick={submitHandler} fontSize={40} color={'rgba(12,87,197,0.98)'}></LuSend>
            </div>

         </div>
      </div>
   );
};

export default MessagesSection;