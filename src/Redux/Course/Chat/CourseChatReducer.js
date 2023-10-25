import {initialState} from "../../initialState.ts";
import {getChat, sendMessage} from "../../../ApiRequests/Chat.jsx";
import {courseChatAC, resetChatItems} from "./CourseChatAC.js";

export const RESET_CHAT = "RESET_CHAT"
export const SET_CHAT = "SET_CHAT"
export const SET_MESSAGE = "SET_MESSAGE"

const CourseChatReducer = (chat = initialState.currentChat, action) => {
  switch (action.type) {

    case SET_CHAT :
      return action.chatData
    case RESET_CHAT :
      return []
    case SET_MESSAGE :
      return {
        ...chat,
        messages: [...chat.messages, action.messageData]
      }

    default :
      return chat
  }
}

export default CourseChatReducer

export const getChatThunkCreator = (idCourse) => {
  return async (dispatch) => {
    try {
      const response = await getChat(idCourse)
      if (response.status === 200) {
        dispatch(courseChatAC(response.data.chatRoom))
      }
    } catch (err) {
      if (err) {
        console.log("Get chat error")
        dispatch(resetChatItems())
      }
    }
  }
}

export const sendMessageThunkCreator = (messageData, chatId, idCourse,waitResponseCallback) => {
  return async (dispatch) => {
    try {

      const response = await sendMessage(messageData, chatId)
      if (response.status === 200) {
        waitResponseCallback(false)
        scroll.current?.scrollIntoView({behavior: "smooth"})
        const chatResponse = await getChat(idCourse)
        if (chatResponse.status === 200) {
          dispatch(courseChatAC(chatResponse.data.chatRoom))
        }
      }
    } catch (err) {
      console.log("send message error")
      waitResponseCallback(false)
    }
  }
}