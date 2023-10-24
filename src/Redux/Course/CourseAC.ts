import {SET_COURSE} from "./courseReducer.ts";
import {ICourse} from "../../Pages/CoursesSection/courseType.ts";
export enum SetCourseAC {
   SET_COURSE= "SET_COURSE"
}
interface ISetCourseAction {
   type:SetCourseAC.SET_COURSE,
   newCourse:ICourse
}

export type ICourseAC = ISetCourseAction

export const courseAC = (newCourse:ICourseAC) => {

   return {
      type : SET_COURSE,
      newCourse
   }
}
