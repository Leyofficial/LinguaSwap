import {initialState} from "../../initialState.js";


export const SET_CHAT = "SET_CHAT"
export const RESET_CHAT = "RESET_CHAT"

const CourseChatReducer = (chat = initialState.currentChat, action) => {
   switch (action.type) {

      case SET_CHAT :
         return action.chatData
      case RESET_CHAT :
         return null
      default :
         return chat
   }
}

export default CourseChatReducer