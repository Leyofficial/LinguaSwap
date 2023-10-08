import {SET_TIME} from "./currentMessageTimeReducer.js";


export const currentMessageTimeAC = (newTime) => {
   return{
      type : SET_TIME,
      newTime
   }
}