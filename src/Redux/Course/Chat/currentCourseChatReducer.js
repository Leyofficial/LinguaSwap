import {initialState} from "../../initialState.js";
import {Course} from "../../../ApiRequests/Courses/Courses.js";
import {currentCourseChat} from "./currentCourseChat.js";
import {getUser} from "../../../ApiRequests/Courses/AuthUser.js";
import {currentCourseTeacherAC} from "./currentCourseTeacher/currentCourseTeacherAC.js";

export const SET_CURRENT_COURSE_CHAT = "SET_CURRENT_COURSE_CHAT"
const currentCourseChatReducer = (currentCourseChat = initialState.currentCourseChat, action) => {
  switch (action.type) {

    case SET_CURRENT_COURSE_CHAT :
      return action.newCourseChat
    default :
      return currentCourseChat
  }
}

export default currentCourseChatReducer

export const getCurrentCourseForChatThunkCreator = (idCourse) => {
  return async (dispatch) => {
    const response = await Course.getCourse(idCourse)

    if (response.status === 200) {
      dispatch(currentCourseChat(response.data.course))

      const responseUser = await getUser(response.data.course.teacher.id)

      if (responseUser) {
        dispatch(currentCourseTeacherAC(responseUser.data.user))
      }
    }
  }
}