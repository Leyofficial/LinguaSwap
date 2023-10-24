import React from 'react';
import style from './Messages.module.scss'
import {useSelector} from "react-redux";
import Message from "../Message/Message.jsx";
import {groupedChatMessage} from "../../../Chat/MainChatHelper/MainChatHelper.js";

const Messages = ({messages, scroll}) => {

   const currentUser = useSelector((state) => state.loginUser)
   const groupedMessage = groupedChatMessage(messages)
   return (
      <>
         {groupedMessage && Object?.entries(groupedMessage).map(([date, messages]) => (

            <div key={date} className={style.container}>
               <h3>{date}</h3>
               {messages.map((message, index) => {
                  return (
                     <div ref={scroll}
                          className={currentUser?._id === message.author ? style.myMessage : style.message}>
                        <div className={style.messageItems}>
                           <Message key={index} author={message.author} isMyMessage={currentUser?._id === message.author}
                                    messageData={message} index={index}></Message>
                        </div>

                     </div>
                  );
               })}
            </div>
         ))}
      </>
   );
};

export default Messages;
