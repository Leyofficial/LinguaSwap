import {RESET_CHAT, SET_CHAT, SET_MESSAGE} from "./CourseChatReducer.js";

export const courseChatAC = (chatData) => {
   return {
      type: SET_CHAT,
      chatData
   }
}

export const resetChatItems = () => {
   return {
      type: RESET_CHAT
   }
}

export const addSocketMessage = (messageData) => {
   return {
      type: SET_MESSAGE,
      messageData
   }
}