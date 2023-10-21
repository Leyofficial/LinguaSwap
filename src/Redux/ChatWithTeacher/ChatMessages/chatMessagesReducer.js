import {initialState} from "../../initialState.ts";
export const SET_MESSAGES = "SET_MESSAGES"
export const ADD_MESSAGE = "ADD_MESSAGE"

const chatMessagesReducer = (messageItems = initialState.messagesWithStudent,action) => {

   switch (action.type) {


      case SET_MESSAGES : return action.newMessages
      case ADD_MESSAGE :
         if(!messageItems.messages.some(message => message.idMessage === action.dataMessage.idMessage)){
            return {
               ...messageItems,messages:[...messageItems.messages,action.dataMessage]
            }
         }
         return messageItems

      default:return messageItems
   }
}

export default chatMessagesReducer