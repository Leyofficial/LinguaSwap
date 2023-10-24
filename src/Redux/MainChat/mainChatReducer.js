import {initialState} from "../initialState.ts";
import {mainChatRequests} from "../../ApiRequests/MainChat/MainChat.js";
import {getMainChat} from "./mainChatAC.js";
import {getChatsThunkCreator} from "../MainChats/mainChatsReducer.js";

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


   return async (dispatch) => {
      try {
         const response = await mainChatRequests.getChat(currentUserId, choseUserId)

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

   return async () => {
      try {
        return await mainChatRequests.createChat(currentUserId, choseUserId)

      } catch (err) {
         console.log(err)
      }
   }
}
export const submitMessageHandlerThunkCreator = (waitForRes,chat,itemData,socket,currentUser,idChat,setChat,resetTextarea) => {
   return async  (dispatch) => {
      try{
         waitForRes(true)
         const responseChat = await mainChatRequests.addMessageItem(chat._id, itemData)

         if(responseChat.status === 200){
            socket.emit("privateMessage", chat._id)
            dispatch(getChatsThunkCreator(currentUser?._id))
            resetTextarea("")
            waitForRes(false)
            const getChatResponse = await mainChatRequests.getChatById(idChat)
            if(getChatResponse.status === 200) {
               setChat(getChatResponse.data.foundChat)
            }

         }

      }catch (err) {
         waitForRes(false)
         console.log(err)
      }
   }
}