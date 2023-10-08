import {getUser} from "./Courses/AuthUser.js";
import axios from "axios";



  export const getMembersOfChat  = async (userId)  => {
    let response = await getUser(userId)

    return response
  }


  export const getChat = async (idCourse) => {
    return  axios.get(`http://localhost:3000/chat/chatroom/${idCourse}`)
  }

  export const sendMessage =  async (data,idChat) => {
    return axios.patch(`http://localhost:3000/chat/chatroom/${idChat}`,data)
  }
  export const getCurrentChatMessages = async (idChat) => {
    return axios.get(`http://localhost:3000/chat/chatroom/${idChat}`)
  }