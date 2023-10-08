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


export const filterCourseThunkCreator = (language, enrolment) => {

  return async (dispatch) => {
    let coursesResponse = await Course.getCourses()
    let filterData = null
    if (coursesResponse.status === 200) {

      if (language && language !== 'All' && enrolment && enrolment !== 'All') {

        filterData = coursesResponse.data.courses.filter(item => item.course.enrolment === enrolment)
        filterData = filterData.filter(item => item.course.language === language)
        dispatch(filterCourseAC(filterData))
      }else if(language && language !== 'All') {
        const filterData = coursesResponse.data.courses.filter(item => item.course.language === language)
        dispatch(filterCourseAC(filterData))
      } else if(enrolment && enrolment !== 'All') {

        const filterData = coursesResponse.data.courses.filter(item => item.course.enrolment === enrolment)
        dispatch(filterCourseAC(filterData))
      }else if (language === 'All') {
        filterData = coursesResponse.data.courses
        dispatch(filterCourseAC(filterData))
      }else if (enrolment === 'All') {
        filterData = coursesResponse.data.courses
        dispatch(filterCourseAC(filterData))
      }
    }
  }
}