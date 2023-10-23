import {RESET_CURRENT_COURSE_CHAT, SET_CURRENT_COURSE_CHAT} from "./currentCourseChatReducer.js";

export const currentCourseChat = (newCourseChat) => {
  return {
    type: SET_CURRENT_COURSE_CHAT,
    newCourseChat
  }
}
export const resetCurrentCourseChat = () => {
  return{
    type : RESET_CURRENT_COURSE_CHAT
  }
}


