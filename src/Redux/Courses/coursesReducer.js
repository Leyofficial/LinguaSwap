import {initialState} from "../initialState.js";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {filterCourseAC, getCoursesAC} from "./coursesAC.js";

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
      try {
         let coursesResponse = await Course.getCourses()
         let filterData = null
         if (coursesResponse.status === 200) {
            filterData = coursesResponse.data.courses

            if (language && language !== 'All') {
               filterData = filterData.filter(item => item.course.language === language)
            }
            if (enrolment && enrolment !== 'All') {
               filterData = filterData.filter(item => item.course.enrolment === enrolment)
            }

            dispatch(filterCourseAC(filterData))
         }
      } catch (error) {
         console.log(error)
      }
   }
}


export const getCoursesThunkCreator = (setLoadCourses) => {
   return async (dispatch) => {
      try {
         const response = await Course.getCourses()
         if (response.status === 200) {
            dispatch(getCoursesAC(response.data.courses))
            setTimeout(() => {
               setLoadCourses(true)
            },1000)
         }
      } catch (err) {
         console.log(err)

      }
   }
}