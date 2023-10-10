import {RESET_CHAT, SET_CHAT} from "./CourseChatReducer.js";

export const courseChatAC = (chatData) => {
return{
   type:SET_CHAT,
   chatData
}
}

export const resetChatItems = () => {
   return{
      type : RESET_CHAT
   }
}