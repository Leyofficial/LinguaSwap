import axios from "axios";


export const onlineUsers = {
   getUsers(online) {
      return axios.get(`http://localhost:3000/onlineUsers/${online}`)
   },
   addUsers(userId, socketId) {

      return axios.post(`http://localhost:3000/onlineUsers`, {
         userId,
         socketId: socketId

      })
   },

   removeUser(socketId) {
      return axios.patch(`http://localhost:3000/onlineUsers`, {
         socketId
      })
   },
   changeLoginStatus(idUser) {
      return axios.patch(`http://localhost:3000/online/${idUser}`)
   }
}