import React, {LegacyRef} from 'react';
import style from './Messages.module.scss'
import {useSelector} from "react-redux";
import Message from "../Message/Message.js";
import {groupedChatMessage} from "../../../Chat/MainChatHelper/MainChatHelper.js";
import {IMessage} from "../MessagesSection.tsx";
import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
interface IMessagesProps{
   messages:IMessage[],
   scroll:LegacyRef<HTMLDivElement> | undefined
}
const Messages = (props:IMessagesProps) => {
   const {messages, scroll} = props

   const currentUser = useTypedSelector((state) => state.loginUser)
   const groupedMessage = groupedChatMessage(messages)
   return (
      <>
         {groupedMessage && Object?.entries<IMessage[]>(groupedMessage).map(([date, messagesData]) => (

            <div key={date} className={style.container}>
               <h3>{date}</h3>
               {messagesData.map((message : IMessage, index : number) => {
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
