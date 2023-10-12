import {ADD_MESSAGE, SET_MESSAGES} from "./chatMessagesReducer.js";

export const chatMessagesAC = (newMessages) => {
   return {
      type:SET_MESSAGES,
      newMessages
   }
}

export const addChatMessage = (dataMessage) => {
   console.log('s')
   return{
      type : ADD_MESSAGE,
      dataMessage
   }
}