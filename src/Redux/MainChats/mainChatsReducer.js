import {initialState} from "../initialState.js";

export const SET_MAIN_CHATS = "SET_MAIN_CHATS"
 const mainChatsReducer = (chats = initialState.mainChats,action) => {
   switch (action.type) {
      case SET_MAIN_CHATS : return action.mainChats

      default:return chats
   }
}

export default mainChatsReducer