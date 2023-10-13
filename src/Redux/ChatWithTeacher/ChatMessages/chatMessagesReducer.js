import {initialState} from "../../initialState.js";
export const SET_MESSAGES = "SET_MESSAGES"
export const ADD_MESSAGE = "ADD_MESSAGE"

const chatMessagesReducer = (messageItems = initialState.messagesWithStudent,action) => {

   switch (action.type) {

      case SET_MESSAGES : return action.newMessages

      case ADD_MESSAGE : return {
         ...messageItems,
         messages:[...messageItems.messages,action.dataMessage]
      }
      default:return messageItems
   }
}

export default chatMessagesReducer