import {initialState} from "../initialState.js";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {filterCourseAC} from "./coursesAC.js";

export const GET_COURSES = "GET_COURSES"

export const FILTER_COURSES = "FILTER_COURSES"
const coursesReducer = (courses = initialState.courses, action) => {
  switch (action.type) {

    case GET_COURSES:
      return action.courses

    case FILTER_COURSES :
      return action.filterCourses

    default:
      return courses
  }
}
export default coursesReducer


export const filterCourseThunkCreator = (language) => {
  return async (dispatch) => {
    let coursesResponse = await Course.getCourses()

    if(coursesResponse.status === 200) {
      const filterData = coursesResponse.data.courses.filter(item => item.course.language === language)
      dispatch(filterCourseAC(filterData))
    }


  }
}