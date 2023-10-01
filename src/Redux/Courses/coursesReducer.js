import {initialState} from "../initialState.js";

export const GET_COURSES = "GET_COURSES"
const coursesReducer = (courses = initialState.courses, action) => {
  switch (action.type) {

    case GET_COURSES:
      return action.courses

    default:
      return courses
  }
}
export default coursesReducer