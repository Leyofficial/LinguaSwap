import {getUser} from "./Courses/AuthUser.js";
import axios from "axios";



export const getMembersOfChat  = async (userId)  => {
  let response = await getUser(userId)

  return response
}


export const getChat = async (idCourse) => {
  return  axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/chat/chatroom/${idCourse}`)
}

export const sendMessage =  async (data,idChat) => {
  return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/chat/chatroom/${idChat}`,data)
}
export const getCoursesForUserChat =  async (idUser) => {
  return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/${idUser}`)
}

export const createChatRoomCourse = async (idCourse) => {

  return axios.post('https://linguaswap-9bebd1d452cf.herokuapp.com/chat/chatroom', {
    idCourse
  })
}

export const getCoursesForTeacher = (idTeacher) => {
  return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/teacher/${idTeacher}`)
}