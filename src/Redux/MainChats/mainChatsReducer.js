import {initialState} from "../initialState.ts";
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

export const getChatsThunkCreator = (idUser,setLoad) => {

  return async (dispatch) => {
    try {
      setLoad(true)
      const response = await mainChatRequests.getChats(idUser)

      if (response.status === 200) {
        dispatch(getMainChats(response.data.foundChats))
        setLoad(false)
      }
    } catch (err) {

      if (err) {
        setLoad(false)
        console.log(err)
        return err.response
      }

    }

  }

}