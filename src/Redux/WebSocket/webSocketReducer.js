import {initialState} from "../initialState.js";

export const SET_SOCKET = "SET_SOCKET"
const webSocketReducer = (socket = initialState.socket,action)=> {
   switch (action.type) {

      case SET_SOCKET:return action.newSocket
      default : return socket
   }
}
export default webSocketReducer

export const webSocketAC = (newSocket) => {
   return{
      type:SET_SOCKET,
      newSocket
   }
}


