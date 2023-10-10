import {SET_COURSE} from "./courseReducer.js";

export const courseAC = (newCourse) => {
   console.log(newCourse)
   return {
      type : SET_COURSE,
      newCourse
   }
}