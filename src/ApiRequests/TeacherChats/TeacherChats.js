import axios from "axios";


export const teacherChats = {

   createChat(idTeacher,idStudent) {
      return axios.post(`http://localhost:3000/teacherChats`,{
         idTeacher,
         idStudent
      })
   },

   getAllChats(idStudent) {
      return axios.get(`http://localhost:3000/teacherChats/${idStudent}`)
   }
}