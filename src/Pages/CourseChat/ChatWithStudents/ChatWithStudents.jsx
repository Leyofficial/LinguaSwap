import React, {useEffect, useState} from 'react';
import MessagesSection from "../Members/MemberChat/Dialog/MessagesSection/MessagesSection.jsx";
import {useSelector} from "react-redux";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import StudentDialog from "./StudentDialog/StudentDialog.jsx";
import FindTeacher from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/FindTeacher.jsx";

const ChatWithStudents = () => {
   const currentUser = useSelector((state) => state.loginUser)
   console.log(currentUser)
   const [chats,setChats] = useState(null)

   useEffect(() => {
      teacherChats.getChatsForTeacher(currentUser._id).then(res => setChats(res.data.findChats))


   }, [currentUser])

   return (
      <>
         {chats && chats.map(item => <FindTeacher itemPath={'/course/chat/teacher'} item={item}></FindTeacher>)}
      </>
   );
};

export default ChatWithStudents;