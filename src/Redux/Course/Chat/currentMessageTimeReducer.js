import {initialState} from "../../initialState.js";

export const SET_TIME = "SET_TIME"
const currentMessageTimeReducer = (timeCurrentChat = initialState.timeCurrentChat,action) => {
   switch (action.type) {

      case SET_TIME : return  action.newTime
      default : return timeCurrentChat
   }
}

export default currentMessageTimeReducer