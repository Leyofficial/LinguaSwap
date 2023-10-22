import {ICourse} from "../../types/coursesTypes.ts";

export enum CoursesActions {
  GET_COURSES = "GET_COURSES",
  FILTER_COURSES = "FILTER_COURSES",
}

interface getCourse {
  type : CoursesActions.GET_COURSES ,
  courses : ICourse[]
}

interface filterCourse {
  type : CoursesActions.FILTER_COURSES,
  filterCourses : ICourse[]
}

export type TCoursesActions = getCourse | filterCourse

export const getCoursesAC = (courses : ICourse[]) : TCoursesActions => {
  return {
    type: CoursesActions.GET_COURSES,
    courses
  }
}

export const filterCourseAC = (filterCourses : ICourse[]) : TCoursesActions => {
  return {
    type : CoursesActions.FILTER_COURSES,
    filterCourses
  }
}