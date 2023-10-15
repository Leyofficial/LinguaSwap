import React, {useEffect} from 'react';
import FindTeacher from "./FindTeacher/FindTeacher.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getChatsWithTeachersThunkCreator} from "../../../Redux/Course/ChatsWithTeacher/chatsWithTeacherReducer.js";

const TeacherChats = () => {

   const currentUser = useSelector((state) => state.loginUser)
   const chatsWithTeacher = useSelector((state) => state.chatsWithTeachers)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getChatsWithTeachersThunkCreator(currentUser._id))
   }, [currentUser])


   return (
      <div>
         {chatsWithTeacher && chatsWithTeacher.map(item => <FindTeacher itemPath={'/course/chat/teacher'}
                                                                        item={item}></FindTeacher>)}
      </div>
   );
};

export default TeacherChats;