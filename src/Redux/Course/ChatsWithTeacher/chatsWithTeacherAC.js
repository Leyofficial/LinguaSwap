import {SET_NEW_CHATS_TEACHERS} from "./chatsWithTeacherReducer.js";

export const chatsWithTeacherAC = (newChatsWithTeacher) => {
   return{
      type:SET_NEW_CHATS_TEACHERS,
      newChatsWithTeacher
   }
}