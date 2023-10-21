import axios from "axios";


export const onlineUsers = {
   getUsers(online) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/onlineUsers/${online}`)
   },
   addUsers(userId, socketId) {

      return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/onlineUsers`, {
         userId,
         socketId: socketId

      })
   },

   removeUser(socketId) {
      return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/onlineUsers`, {
         socketId
      })
   },
   changeLoginStatus(idUser) {
      return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/online/${idUser}`)
   }
}