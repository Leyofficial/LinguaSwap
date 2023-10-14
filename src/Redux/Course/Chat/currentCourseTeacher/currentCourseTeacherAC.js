import {SET_CURRENT_COURSE_TEACHER} from "./currentCourseTeacherReducer.js";

export const currentCourseTeacherAC = (teacherCourse) => {
  return{
    type : SET_CURRENT_COURSE_TEACHER,
    teacherCourse
  }
}