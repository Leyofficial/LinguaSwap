import {initialState} from "../initialState.js";
import {teacherChats} from "../../ApiRequests/TeacherChats/TeacherChats.js";
import {addChatMessage, chatMessagesAC} from "../ChatWithTeacher/ChatMessages/chatMessagesAC.js";
import {getUser} from "../../ApiRequests/Courses/AuthUser.js";
import {getChatMember} from "./chatWithMemberOfCourseAC.js";

export const SET_CHAT_MEMBER = "SET_CHAT_MEMBER"

const chatWithMemberOfCourseReducer = (chatWithMemberOfCourse = initialState.chatWithMemberCourse, action) => {
   switch (action.type) {
      case SET_CHAT_MEMBER :
         return action.newChatMember

      default:
         return chatWithMemberOfCourse
   }
}
export default chatWithMemberOfCourseReducer

export const getChatWithMemberThunkCreator = (idTeacher, idStudent, chatStatus) => {
   return async (dispatch) => {
      try {
         const response = await teacherChats.getChatWithTeacher(idTeacher, idStudent)
         if (response.status === 200) {
            dispatch(chatMessagesAC(response.data.findChatTeacher))

            const responseUser = getUser(chatStatus === 'student' ? response.data.findChatTeacher.idStudent : response.data.findChatTeacher.idTeacher)
            if (responseUser.status === "Succeed") {
               dispatch(getChatMember(responseUser.user))
            }
         }

      } catch (err) {
         console.log(err)
      }
   }
}

export const sendSocketMessageThunkCreator = (messageData, chatId, socket, idTeacher, idStudent, scroll) => {
   return async (dispatch) => {
      try {

         const messageResponse = await teacherChats.sendMessage(messageData, chatId)
         if (messageResponse.status === 200) {
            socket.emit("privateMessage", messageData)
            const chatResponse = await teacherChats.getChatWithTeacher(idTeacher, idStudent)
            if (chatResponse.status === 200) {
               dispatch(addChatMessage(messageData))
               scroll.current?.scrollIntoView({behavior: "smooth"})
            }
         }
      } catch (err) {
         console.log(err)
      }
   }
}