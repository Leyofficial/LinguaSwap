import React, {useEffect, useState} from 'react';
import FindTeacher from "./FindTeacher/FindTeacher.jsx";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {useSelector} from "react-redux";

const TeacherChats = () => {

   const currentUser = useSelector((state) => state.loginUser)
   const [chatsWithTeacher,setChatsWithTeacher] = useState(null)
   useEffect(() => {
      teacherChats.getAllChats(currentUser._id).then(res => setChatsWithTeacher(res.data.findChats))
   }, [currentUser])

   return (
      <div>
         {chatsWithTeacher && chatsWithTeacher.map(item => <FindTeacher item={item}></FindTeacher>)}

      </div>
   );
};

export default TeacherChats;