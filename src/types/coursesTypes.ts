import {TEnrolmentType, TLanguagesItems} from "./coursesTypesLanguages.ts";

export interface ICourse {
    _id : string,
    course : {
        members : string[]
        durationCourse : string,
        finishCourse : string,
        description:string,
        image : string,
        name : string,
        startCourse : string,
        subjects : ISubjects[],
        level : string,
        language : TLanguagesItems,
        enrolment :  TEnrolmentType
    },
    teacher : {
        id : string,
        name : string
    }
}

export interface ISubjects {
    _id : string,
    topic : string,
    description : string
}