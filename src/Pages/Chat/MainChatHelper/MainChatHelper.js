import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";

export const getInterlocutor = (currentUserId,dialog,callback) => {
  if (currentUserId !== dialog.members.first) {
    getUser(dialog.members.first).then(res => {
      if (res.status === 200) {
        callback(res.data.user)
      }
    })
  } else {
    getUser(dialog.members.second).then(res => {
      if (res.status === 200) {
        callback(res.data.user)
      }
    })
  }
}