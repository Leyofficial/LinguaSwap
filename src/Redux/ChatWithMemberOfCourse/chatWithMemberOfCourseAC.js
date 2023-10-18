import {SET_CHAT_MEMBER} from "./chatWithMemberOfCourseReducer.js";

export const getChatMember = (newChatMember) => {
   return{
      type:SET_CHAT_MEMBER,
      newChatMember
   }
}