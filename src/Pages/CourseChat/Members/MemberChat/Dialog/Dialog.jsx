import React from 'react';
import style from './Dialog.module.scss'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
   MainContainer,
   ChatContainer,
   MessageList,
   Message,
   MessageInput,
} from "@chatscope/chat-ui-kit-react";
const Dialog = () => {
   return (
      <div style={{ position: "relative", height: "500px" }}>
         <MainContainer>
            <ChatContainer>
               <MessageList>
                  <Message
                     model={{
                        message: "Hello my friend",
                        sentTime: "07.10.2023",
                        sender: "Joe",
                     }}
                  />
                  <Message
                     model={{
                        message: "Hello my friend",
                        sentTime: "07.10.2023",
                        sender: "Pol",
                     }}
                  />
               </MessageList>
               <MessageInput placeholder="Type message here" />
            </ChatContainer>
         </MainContainer>
      </div>
   );
};

export default Dialog;

