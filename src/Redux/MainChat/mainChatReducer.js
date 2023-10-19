import {initialState} from "../initialState.js";
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";
import {getMainChat} from "./mainChatAC.js";

export const GET_MAIN_CHAT = "GET_MAIN_CHAT"
export const mainChatReducer = (chat = initialState.mainChat, action) => {
   switch (action.type) {
      case GET_MAIN_CHAT :
         return action.mainChat
      default:
         return chat
   }
}
export const getChatThunkCreate = (currentUserId, choseUserId, navigate) => {
console.log(choseUserId)
   return async (dispatch) => {
      try {
         const response = await mainChatRequests.getChat(currentUserId, choseUserId)
         console.log(response)
         if (response.status === 200) {
            dispatch(getMainChat(response.data.foundChat))
            navigate(`/chat/chat/${choseUserId}`)
         }

      } catch (err) {
         console.log(err)
         if (err.response.status === 404) {
            dispatch(createChatThunkCreator(currentUserId, choseUserId))
            navigate(`/chat/chat/${choseUserId}`)

         }


      }
   }
}

export const createChatThunkCreator = (currentUserId, choseUserId) => {

   return async (dispatch) => {
      try {
         const response = await mainChatRequests.createChat(currentUserId, choseUserId)
         console.log(response)
      } catch (err) {
         console.log(err)
      }
   }
}