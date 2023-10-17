import {initialState} from "../initialState.js";
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";
import {getMainChat} from "./mainChatAC.js";

export const GET_MAIN_CHAT = "GET_MAIN_CHAT"
export const mainChatReducer = (chat = initialState.mainChat, action) => {
   switch (action.type) {
      case GET_MAIN_CHAT : return  action.mainChat
      default:
         return chat
   }
}
export const getChatThunkCreate = (currentUserId, choseUserId) => {

   return async (dispatch) => {
      try {
         const response = await mainChatRequests.getChat(currentUserId, choseUserId)

         if(response.status === 200){
           dispatch(getMainChat(response.data.foundChat))
         }
         return response
      } catch (err) {
         return err.response

      }
   }

}
export const createChatThunkCreator = (currentUserId, choseUserId) => {

   return async (dispatch) => {
      try {
         const response = await mainChatRequests.createChat(currentUserId, choseUserId)

      } catch (err) {
         console.log(err)
      }
   }
}