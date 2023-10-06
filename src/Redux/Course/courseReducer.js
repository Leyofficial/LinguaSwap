import {initialState} from "../initialState.js";

export const SET_COURSE = "SET_COURSE"

 const courseReducer = (course = initialState.currentCourse,action) => {
   switch (action.type) {
      case SET_COURSE: return action.newCourse
      default:return course
   }
}

export default courseReducer