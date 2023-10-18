import {getUser} from "../../ApiRequests/Courses/AuthUser.js";

export const getUserAvatar = async (userId) => {

   let avatar = ""
    await getUser(userId).then(res => avatar = res.user.user.data.photo)

   return avatar
}
