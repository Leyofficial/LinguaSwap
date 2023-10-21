import axios from "axios";


export const mainChatRequests = {
   getChat(firstMember,secondMember) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/mainChat/chat/${firstMember}/${secondMember}`)
   },
   getChats(idUser) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/mainChat/chats/dialogs/${idUser}`)
   },
   createChat(first, second) {
      return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/mainChat/create`, {
         members:{
            first,
            second
         }
      })
   },
   getChatById(idChat){
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/mainChat/chatById/${idChat}`)
   },
   addMessageItem(idChat,item) {
      return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/mainChat/chatById/${idChat}`,{
         ...item
      })
   }
}

