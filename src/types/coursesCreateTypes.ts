export interface ICoursesCreateTypes {
    teacher: {
        id:string,
        name: string,
    },
    course: {
        name: string,
        startCourse: string,
        finishCourse:string,
        durationCourse: string,
        members: any[],
        image: string,
        subjects: string,
        level: string,
        language: string,
        enrolment:string,
        description: string
    }
}

export interface ICoursesWrapper {
    topics: any[],
    description: string,
    finishDate: string,
    startDate: string,
    duration: string,
    level: string,
    language: string,
    title: string
}