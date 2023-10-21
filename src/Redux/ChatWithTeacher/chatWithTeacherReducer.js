import {initialState} from "../initialState.ts";

export const CHANGE_CHAT_STATUS = "CHANGE_CHAT_STATUS"
const chatWithTeacherReducer = (chatStatus = initialState.chatStatus,action) => {
   switch (action.type) {

      case CHANGE_CHAT_STATUS: return  action.status
      default : return chatStatus
   }
}
export default chatWithTeacherReducer;


export const changeChatStatus = (status) => {
   return{
      type : CHANGE_CHAT_STATUS,
      status
   }
}