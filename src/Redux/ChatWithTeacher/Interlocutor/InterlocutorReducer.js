import {initialState} from "../../initialState.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {getInterlocutorAC} from "./InterlocutorAC.js";

export const SET_INTERLOCUTOR = "SET_INTERLOCUTOR"
const interlocutorReducer = (interlocutor = initialState.interlocutor, action) => {
   switch (action.type) {
      case SET_INTERLOCUTOR :
         return action.newInterlocutor
      default:
         return interlocutor
   }
}
export default interlocutorReducer

export const getInterlocutorThunkCreator = (chatStatus, item) => {

   return async (dispatch) => {
      try {
         const response = await getUser(chatStatus === "teacher" ? item.idTeacher : item.idStudent)

         if (response.status === "Succeed") {
            dispatch(getInterlocutorAC(response.user))
         }
      } catch (err) {
         console.log(err)
      }
   }
}