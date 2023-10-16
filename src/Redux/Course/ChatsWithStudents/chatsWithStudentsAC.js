import {SET_CHATS_WITH_STUDENTS} from "./chatsWithStudentsReducer.js";

export const chatsWithStudentsAC = (newStudentChats) => {
   return{
      type:SET_CHATS_WITH_STUDENTS,
      newStudentChats
   }
}