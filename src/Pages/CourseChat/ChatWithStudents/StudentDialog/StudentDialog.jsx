import React, {useEffect} from 'react';
import style from './StudentDialog.module.scss'
import MessagesSection from "../../Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {useParams} from "react-router";

const StudentDialog = () => {

   const {idTeacher,idStudent} = useParams()

   useEffect(() => {

   },[])

   return (
      // <MessagesSection name={teacher?.user.data.name}
      //                  messages={chat?.messages} sendMessageHandler={sendMessageHandler}
      //                  scroll={scroll}
      // ></MessagesSection>
      <></>
   );
};

export default StudentDialog;