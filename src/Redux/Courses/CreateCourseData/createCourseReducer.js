import {initialState} from "../../initialState.js";

export const SET_TITLE = "SET_TITLE"
export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_LEVEL = "SET_LEVEL"
export const SET_DURATION = "SET_DURATION"
export const SET_START_DATE = "SET_START_DATE"
export const SET_FINISH_DATE = "SET_FINISH_DATE"
export const SET_DESCRIPTION_COURSE = "SET_DESCRIPTION_COURSE"

export const SET_TOPICS = "SET_TOPICS"
const createCourseReducer = (dataCourse = initialState.createCourseData, action) => {

   switch (action.type) {
      case SET_TITLE :
         return {
            ...dataCourse,
            title: action.title
         }
      case SET_LANGUAGE:
         return {
            ...dataCourse,
            language: action.language
         }
      case SET_LEVEL :
         return {
            ...dataCourse,
            level: action.level
         }

      case SET_DURATION : {
         return {
            ...dataCourse,
            duration: action.duration
         }
      }
      case SET_START_DATE : {
         return {
            ...dataCourse,
            startDate: action.start
         }
      }
      case SET_FINISH_DATE : {
         return {
            ...dataCourse,
            finishDate: action.finish
         }
      }
      case SET_DESCRIPTION_COURSE : {
         return {
            ...dataCourse,
            description: action.description
         }
      }
      case SET_TOPICS : {
         return {
            ...dataCourse,
            topics: [...dataCourse.topics, action.topic]
         }
      }
      default :
         return dataCourse
   }
}
export default createCourseReducer