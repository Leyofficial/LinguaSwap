import {initialState} from "../../initialState.js";
import {teacherChats} from "../../../ApiRequests/TeacherChats/TeacherChats.js";
import {chatsWithTeacherAC} from "./chatsWithTeacherAC.js";
import {chatsWithStudentsThunkCreator} from "../ChatsWithStudents/chatsWithStudentsReducer.js";

export const SET_NEW_CHATS_TEACHERS = "SET_NEW_CHATS_TEACHERS"

const  chatsWithTeacherReducer = (chatsWithTeachers = initialState.chatsWithTeacher,action) => {
   switch (action.type) {

      case SET_NEW_CHATS_TEACHERS : return  action.newChatsWithTeacher
      default:return chatsWithTeachers
   }
}
export default chatsWithTeacherReducer

export const getChatsWithTeachersThunkCreator = (userId) => {
   return async (dispatch) => {
      try{
         const response =  await teacherChats.getAllChats(userId)
         if(response.status === 200) {
            dispatch(chatsWithTeacherAC(response.data.findChats))
         }

      }catch (err) {
         console.log(err)
      }
   }
}