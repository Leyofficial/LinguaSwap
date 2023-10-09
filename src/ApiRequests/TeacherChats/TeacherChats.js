import axios from "axios";


export const teacherChats = {

   createChat(idTeacher,idStudent) {
      console.log(idTeacher)
      console.log(idStudent)
      return axios.post(`http://localhost:3000/teacherChats`,{
         idTeacher,
         idStudent
      })
   }
}