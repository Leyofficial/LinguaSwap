import {initialState} from "../initialState.js";
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";
import {getMainChats} from "./mainChatsAC.js";

export const SET_MAIN_CHATS = "SET_MAIN_CHATS"
const mainChatsReducer = (chats = initialState.mainChats, action) => {
   switch (action.type) {
      case SET_MAIN_CHATS :
         return action.mainChats

      default:
         return chats
   }
}

export default mainChatsReducer

export const getChatsThunkCreator = (idUser) => {

   return async (dispatch) => {
      try {
         const response = await mainChatRequests.getChats(idUser)

         if (response.status === 200) {
            dispatch(getMainChats(response.data.foundChats))
         }
      } catch (err) {

         if (err) {
console.log(err)
            return err.response
         }

      }

   }

}