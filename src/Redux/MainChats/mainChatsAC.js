import {SET_MAIN_CHATS} from "./mainChatsReducer.js";


export const getMainChats = (mainChats) => {
   return{
      type:SET_MAIN_CHATS,
      mainChats
   }
}