import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FindTeacher from "../../ChooseTypeOfChat/TeacherChats/FindTeacher/FindTeacher.jsx";
import {chatsWithStudentsThunkCreator} from "../../../Redux/Course/ChatsWithStudents/chatsWithStudentsReducer.js";

const ChatWithStudents = () => {
   const currentUser = useSelector((state) => state.loginUser)
   const dispatch = useDispatch()
   const chatsWithStudents = useSelector((state) => state.chatsWithStudents)

   useEffect(() => {
      dispatch(chatsWithStudentsThunkCreator(currentUser._id))

   }, [currentUser])

   return (
      <>
         {chatsWithStudents && chatsWithStudents.map(item => <FindTeacher itemPath={'/course/chat/teacher'}
                                                                          item={item}></FindTeacher>)}
      </>
   );
};

export default ChatWithStudents;