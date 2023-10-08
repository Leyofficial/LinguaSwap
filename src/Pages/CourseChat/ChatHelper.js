import {getUser} from "../../ApiRequests/Courses/AuthUser.js";


export const chatHelper = {
   isMyMessage(idAuthor, idLoginUser) {
      return idAuthor === idLoginUser
   },
   async getAuthorMessageAvatar(idAuthor,callback) {

      return await getUser(idAuthor).then(res => {

         if (res.status === "Succeed") {
            callback(res.user.user.data?.photo)
         }
      })
   },

}