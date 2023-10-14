import {SET_CURRENT_COURSE_CHAT} from "./currentCourseChatReducer.js";

export const currentCourseChat = (newCourseChat) => {
  return {
    type: SET_CURRENT_COURSE_CHAT,
    newCourseChat
  }
}


