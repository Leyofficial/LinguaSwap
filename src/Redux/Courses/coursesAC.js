import {FILTER_COURSES, GET_COURSES} from "./coursesReducer.js";

export const getCoursesAC = (courses) => {
  return {
    type: GET_COURSES,
    courses
  }
}

export const filterCourseAC = (filterCourses) => {
  return {
    type : FILTER_COURSES,
    filterCourses
  }
}