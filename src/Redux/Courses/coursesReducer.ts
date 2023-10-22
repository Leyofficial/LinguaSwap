import {initialState} from "../initialState.ts";
import {Course} from "../../ApiRequests/Courses/Courses.js";
import {CoursesActions, filterCourseAC, getCoursesAC, TCoursesActions} from "./coursesAC.ts";
import {Dispatch} from "redux";
import {ICourse} from "../../types/coursesTypes.ts";
import {TEnrolmentType, TLanguagesItems} from "../../types/coursesTypesLanguages.ts";

const coursesReducer = (courses = initialState.courses, action : TCoursesActions) : ICourse[]  => {
   switch (action.type) {

      case CoursesActions.GET_COURSES:
         return action.courses

      case CoursesActions.FILTER_COURSES :
         return action.filterCourses

      default:
         return courses
   }
}
export default coursesReducer
export const filterCourseThunkCreator = (language : TLanguagesItems , enrolment : TEnrolmentType) => {
   return async (dispatch  : Dispatch ) => {
      try {
         let coursesResponse = await Course.getCourses()
         let filterData = null
         if (coursesResponse.status === 200) {
            filterData = coursesResponse.data.courses

            if (language && language !== 'All') {
               filterData = filterData.filter((item : ICourse) => item.course.language === language)
            }
            if (enrolment && enrolment !== 'All') {
               filterData = filterData.filter((item : ICourse) => item.course.enrolment === enrolment)
            }

            dispatch(filterCourseAC(filterData))
         }
      } catch (error) {
         console.log(error)
      }
   }
}


export interface ISetLoadCourses {
   (b: boolean): void;
}

export const getCoursesThunkCreator = (setLoadCourses: ISetLoadCourses) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await Course.getCourses();
         if (response.status === 200) {
            dispatch(getCoursesAC(response.data.courses));
            setTimeout(() => {
               setLoadCourses(true);
            }, 1000);
         }
      } catch (err) {
         console.log(err);
      }
   };
};
