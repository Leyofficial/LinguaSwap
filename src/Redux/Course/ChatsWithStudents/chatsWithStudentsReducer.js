import {initialState} from "../../initialState.ts";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {chatsWithStudentsAC} from "./chatsWithStudentsAC.js";

export const SET_CHATS_WITH_STUDENTS = "SET_CHATS_WITH_STUDENTS"
const chatsWithStudentsReducer = (chatsWithStudents = initialState.chatsWithStudents, action) => {
   switch (action.type) {
      case SET_CHATS_WITH_STUDENTS :
         return action.newStudentChats
      default:
         return chatsWithStudents
   }
}

export default chatsWithStudentsReducer

export const chatsWithStudentsThunkCreator = (userId) => {
   return async (dispatch) => {
      try {
         const response = await teacherChats.getChatsForTeacher(userId)
         if (response.status === 200) {
            dispatch(chatsWithStudentsAC(response.data.findChats))
         }
      } catch (err) {
         console.log(err)
      }
   }
}