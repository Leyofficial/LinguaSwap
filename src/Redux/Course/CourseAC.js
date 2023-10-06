import {SET_COURSE} from "./courseReducer.js";

export const courseAC = (newCourse) => {
   return {
      type : SET_COURSE,
      newCourse
   }
}