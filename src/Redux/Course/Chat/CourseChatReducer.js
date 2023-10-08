import {initialState} from "../../initialState.js";


export const SET_CHAT = "SET_CHAT"

const CourseChatReducer = (chat = initialState.currentChat,action) =>{
   switch (action.type) {

      case SET_CHAT : return action.chatData

      default : return chat
   }
}

export default CourseChatReducer