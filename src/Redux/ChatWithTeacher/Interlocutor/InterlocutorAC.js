import {SET_INTERLOCUTOR} from "./InterlocutorReducer.js";

export const getInterlocutorAC = (newInterlocutor) => {
   return{
      type : SET_INTERLOCUTOR,
      newInterlocutor
   }
}