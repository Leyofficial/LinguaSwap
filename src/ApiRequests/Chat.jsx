import {getUser} from "./Courses/AuthUser.js";



  export const getMembersOfChat  = async (userId)  => {
    let response = await getUser(userId)

    return response
  }
