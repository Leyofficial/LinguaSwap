import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {mainChatRequests} from "../../../ApiRequests/MainChat/MainChat.js";
import {getChatsThunkCreator} from "../../../Redux/MainChats/mainChatsReducer.js";

export const getInterlocutor = (currentUserId,dialog,callback) => {

  if (currentUserId && currentUserId !== dialog?.members?.first) {
    getUser(dialog?.members?.first).then(res => {

      if (res.status === 200) {
        callback(res.data.user)
      }
    })
  } else if(currentUserId) {
    getUser(dialog?.members.second).then(res => {
      if (res.status === 200) {

        callback(res.data.user)
      }
    })
  }
}

// export const submitMessageHandler = (newSocket,currentUser,itemData,chat,setWaitResponse) => {
//   setWaitResponse(true)
//   mainChatRequests.addMessageItem(chat._id, itemData).then(res => {
//     if (res.status === 200) {
//       newSocket.emit("privateMessage", chat._id)
//       dispatch(getChatsThunkCreator(currentUser?._id))
//       setWaitResponse(false)
//       mainChatRequests.getChatById(idChat).then(res => {
//         if (res.status === 200) {
//           setChat(res.data.foundChat)
//         }
//       })
//       setValueTextarea("")
//     }
//   }).catch(err => {
//     setWaitResponse(false)
//   })
// }