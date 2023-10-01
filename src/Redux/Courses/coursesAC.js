import {GET_COURSES} from "./coursesReducer.js";

export const getCoursesAC = (courses) => {
  return {
    type: GET_COURSES,
    courses
  }
}