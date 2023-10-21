import {initialState} from "../initialState.ts";


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


