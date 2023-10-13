import {ADD_NEW_ONLINE_USER, REMOVE_ONLINE_USER, SET_ONLINE_USERS} from "./onlineUsersReducer.js";

export const onlineUsersAC = (newOnlineUsers) => {
   return {
      type: SET_ONLINE_USERS,
      newOnlineUsers
   }
}
export const addOnlineUserAC = (newUser) => {
   return {
      type: ADD_NEW_ONLINE_USER,
      newUser
   }
}

export const removeUserAC = (userId) => {

   return{
      type:REMOVE_ONLINE_USER,
      userId
   }
}