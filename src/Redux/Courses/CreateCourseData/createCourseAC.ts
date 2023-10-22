import {TCreateActions} from "./ICreateCourse.ts";

export enum createCourseActions  {
   SET_TITLE = "SET_TITLE",
   SET_LANGUAGE = "SET_LANGUAGE",
   SET_LEVEL = "SET_LEVEL",
   SET_DURATION = "SET_DURATION",
   SET_START_DATE = "SET_START_DATE",
   SET_FINISH_DATE = "SET_FINISH_DATE",
   SET_DESCRIPTION_COURSE = "SET_DESCRIPTION_COURSE",
   SET_TOPICS = "SET_TOPICS",
   RESET_COURSE_DATA = "RESET_COURSE_DATA"
}



export const getTitleAC = (title : string): TCreateActions => {
   return {
      type: createCourseActions.SET_TITLE,
      title
   }
}
export const getLanguageAC = (language : string): TCreateActions => {
   return {
      type: createCourseActions.SET_LANGUAGE,
      language
   }
}
export const getLevelAC = (level : string): TCreateActions => {
   return {
      type:  createCourseActions.SET_LEVEL,
      level
   }
}

export const getDurationAC = (duration : string): TCreateActions => {
   return {
      type: createCourseActions.SET_DURATION,
      duration
   }
}
export const getStartDateAC = (start : string): TCreateActions => {
   return {
      type: createCourseActions.SET_START_DATE,
      start
   }
}
export const getFinishDateAC = (finish : string): TCreateActions => {
   return {
      type: createCourseActions.SET_FINISH_DATE,
      finish
   }
}
export const getDescriptionAC = (description : string): TCreateActions => {
   return {
      type: createCourseActions.SET_DESCRIPTION_COURSE,
      description: description
   }
}

export const getTopicAC = (topic : unknown[]): TCreateActions => {
   return {
      type: createCourseActions.SET_TOPICS,
      topic: topic
   }
}
export const resetCourseAC = (): TCreateActions => {
   return {
      type: createCourseActions.RESET_COURSE_DATA
   }
}