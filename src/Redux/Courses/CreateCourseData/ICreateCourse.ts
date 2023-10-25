import {createCourseActions} from "./createCourseAC.ts";

export interface ISetTitle {
    type : createCourseActions.SET_TITLE,
    title : string
}
export interface ISetLanguages {
    type : createCourseActions.SET_LANGUAGE
    language : string
}
export interface ISetLevel {
    type : createCourseActions.SET_LEVEL
    level : string,
}
export interface ISetDuration {
    type : createCourseActions.SET_DURATION
    duration : string,
}
export interface ISetStartDate {
    type : createCourseActions.SET_START_DATE,
    start : string,
}

export interface ISetFinishDate {
    type : createCourseActions.SET_FINISH_DATE,
    finish : string
}

export interface ISetDescription {
    type : createCourseActions.SET_DESCRIPTION_COURSE,
    description : string
}

export interface ISetTopic {
    type : createCourseActions.SET_TOPICS,
    topic : {topic:String,description:String},
}
export interface IResetCourseData {
    type : createCourseActions.RESET_COURSE_DATA
}

export type TCreateActions = ISetTitle | ISetLanguages | ISetDuration | ISetStartDate | ISetFinishDate | ISetDescription| ISetTopic | IResetCourseData | ISetLevel