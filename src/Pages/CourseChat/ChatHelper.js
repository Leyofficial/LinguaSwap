import {getUser} from "../../ApiRequests/Courses/AuthUser.js";


export const chatHelper = {
   isMyMessage(idAuthor, idLoginUser) {
      return idAuthor === idLoginUser
   },
   async getAuthorMessageAvatar(idAuthor,callback) {

      return  getUser(idAuthor).then(res => res.user.user.data?.photo)
   },

}