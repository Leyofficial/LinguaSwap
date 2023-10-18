import axios from "axios";


export const mainChatRequests = {
   getChat(firstMember,secondMember) {
      return axios.get(`http://localhost:3000/mainChat/chat/${firstMember}/${secondMember}`)
   },
   getChats(idUser) {
      return axios.get(`http://localhost:3000/mainChat/chats/dialogs/${idUser}`)
   },
   createChat(first, second) {
      return axios.post(`http://localhost:3000/mainChat/create`, {
         members:{
            first,
            second
         }
      })
   },
   getChatById(idChat){
      return axios.get(`http://localhost:3000/mainChat/chatById/${idChat}`)
   }
}

