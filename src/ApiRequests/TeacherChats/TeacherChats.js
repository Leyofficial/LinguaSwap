import axios from "axios";


export const teacherChats = {

   createChat(idTeacher,idStudent) {
      return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/teacherChats`,{
         idTeacher,
         idStudent
      })
   },

   getAllChats(idStudent) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/teacherChats/${idStudent}`)
   },

   getChatWithTeacher(idTeacher,idStudent) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/teacherChats/chat/${idTeacher}/${idStudent}`)

   },
   sendMessage(data,idChat) {
      return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/teacherChats/${idChat}`,data)

   },
   getChatsForTeacher(idTeacher) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/teacherChats/studentsChat/${idTeacher}`)
   }
}