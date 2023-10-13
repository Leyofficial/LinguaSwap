import {ADD_MESSAGE, SET_MESSAGES} from "./chatMessagesReducer.js";

export const chatMessagesAC = (newMessages) => {
   return {
      type:SET_MESSAGES,
      newMessages
   }
}

export const addChatMessage = (dataMessage) => {
   console.log(dataMessage)
   return{
      type : ADD_MESSAGE,
      dataMessage
   }
}