import {initialState} from "../initialState.ts";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {courseAC} from "./CourseAC.js";
import {teacherChats} from "../../ApiRequests/TeacherChats/TeacherChats.js";

export const SET_COURSE = "SET_COURSE"

const courseReducer = (course = initialState.currentCourse, action) => {
   switch (action.type) {
      case SET_COURSE:
         return action.newCourse
      default:
         return course
   }
}

export default courseReducer

export const getCourseThunkCreator = (idCourse, setLeadCourse) => {
   return async (dispatch) => {
      try {
         const response = await Course.getCourse(idCourse)
         if (response.status === 200) {
            setTimeout(() => {
               setLeadCourse(true)
            }, 1000)
            dispatch(courseAC(response.data.course))
         }
      } catch (err) {

         console.log(err)
      }

   }
}

export const joinToCourseAndCreateChatThunkCreator = (courseId, teacherId, userId) => {
   return async (dispatch) => {
      try {
         await teacherChats.createChat(teacherId, userId)
         const joinCourseResponse = await Course.addNewMember(userId, courseId)

         if (joinCourseResponse.status === 200) {
            const response = await Course.getCourse(courseId)
            if (response.status === 200) {
               dispatch(courseAC(response.data.course))
            }
         }
      } catch (err) {
         console.log(err)
      }
   }
}