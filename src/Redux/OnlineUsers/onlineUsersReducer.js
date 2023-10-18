import {initialState} from "../initialState.js";

export const SET_ONLINE_USERS = "SET_ONLINE_USERS"
export const ADD_NEW_ONLINE_USER = "ADD_NEW_ONLINE_USER"

export const REMOVE_ONLINE_USER = "REMOVE_ONLINE_USER"
const onlineUsersReducer = (onlineUsers = initialState.onlineUsers, action) => {

   switch (action.type) {
      case SET_ONLINE_USERS :
         return action.newOnlineUsers
      case ADD_NEW_ONLINE_USER :
         if (!onlineUsers.some(user => user._id === action.newUser._id)) {
            return [...onlineUsers, action.newUser]
         } else {
            return onlineUsers
         }

      case REMOVE_ONLINE_USER :
         return onlineUsers.filter(item => item._id !== action.userId)

      default :
         return onlineUsers
   }
}

export default onlineUsersReducer