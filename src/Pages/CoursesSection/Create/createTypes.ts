import {ICourseSubject} from "../courseType.ts";

export interface ICreateTypesProps {
    moveStepCallback : (currentStep:number) => void,
    currentStep:number,
    setPhoto?:(filename:string) => void,
    moveStepBackCallback?:(currentStep:number) => void,
    photoCourse?:string
}

export interface ICreateCourseData {
    title:string,
    language:string,
    level:string,
    duration:string,
    startDate:string,
    finishDate:string,
    description:string,
    topics:ICourseSubject[]

}