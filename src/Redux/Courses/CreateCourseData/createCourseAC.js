import {
   RESET_COURSE_DATA,
   SET_DESCRIPTION_COURSE,
   SET_DURATION, SET_FINISH_DATE,
   SET_LANGUAGE,
   SET_LEVEL,
   SET_START_DATE,
   SET_TITLE, SET_TOPICS
} from "./createCourseReducer.js";


export const getTitleAC = (title) => {
   return {
      type: SET_TITLE,
      title
   }
}
export const getLanguageAC = (language) => {
   return {
      type: SET_LANGUAGE,
      language
   }
}
export const getLevelAC = (level) => {
   return {
      type: SET_LEVEL,
      level
   }
}

export const getDurationAC = (duration) => {
   return{
      type : SET_DURATION,
      duration
   }
}
export const getStartDateAC = (start) => {
   return {
      type: SET_START_DATE,
      start
   }
}
export const getFinishDateAC = (finish) => {
   return {
      type : SET_FINISH_DATE,
      finish
   }
}
export const getDescriptionAC = (description) => {
   return{
      type : SET_DESCRIPTION_COURSE,
      description:description
   }
}

export const getTopicAC = (topic ) => {
   return{
      type : SET_TOPICS,
      topic
   }
}
export const resetCourseAC = () => {
   return{
      type:RESET_COURSE_DATA
   }
}