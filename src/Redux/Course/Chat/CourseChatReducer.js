import {initialState} from "../../initialState.js";

export const RESET_CHAT = "RESET_CHAT"
export const SET_CHAT = "SET_CHAT"
export const SET_MESSAGE = "SET_MESSAGE"

const CourseChatReducer = (chat = initialState.currentChat,action) => {
   switch (action.type) {

      case SET_CHAT : return action.chatData
      case RESET_CHAT : return []
      case SET_MESSAGE : return {
         ...chat,
         messages: [...chat.messages,action.messageData]
      }

      default : return chat
   }
}

export default CourseChatReducer