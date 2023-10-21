import {initialState} from "../../../initialState.ts";

export const SET_CURRENT_COURSE_TEACHER = "SET_CURRENT_COURSE_TEACHER"
export const currentCourseTeacherReducer = (teacher = initialState.currentCourseTeacher,action) => {
  switch (action.type) {
    case SET_CURRENT_COURSE_TEACHER : return  action.teacherCourse

    default:return teacher
  }
}


