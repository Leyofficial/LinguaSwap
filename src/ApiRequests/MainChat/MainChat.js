import axios from "axios";


export const mainChatRequests = {
   getChat(first,second) {
      return axios.get(`http://localhost:3000/mainChat/${first}/${second}`)
   },
   getChats(idUser) {
      return axios.get(`http://localhost:3000/mainChat/chats/${idUser}`)
   },
   createChat(first, second) {
      return axios.post(`http://localhost:3000/mainChat/create`, {
         members:{
            first,
            second
         }
      })
   }
}

