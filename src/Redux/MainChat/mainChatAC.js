import {GET_MAIN_CHAT} from "./mainChatReducer.js";

export const getMainChat = (mainChat) => {
   return{
      type:GET_MAIN_CHAT,
      mainChat
   }
}