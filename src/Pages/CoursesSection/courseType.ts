
export interface ICourseSubject {
    description:string,
    topic:string,
    _id:string
}
export interface ICourse {
    course:{
        durationCourse:string,
        finishCourse:string,
        image:string,
        language:string,
        level:string,
        members:[string],
        name:string,
        startCourse:string,
        subjects:ICourseSubject[]
    },
    teacher:{
        id:string,
        name:string
    },
    _id:string
}