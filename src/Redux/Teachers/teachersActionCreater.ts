import {IUserInfo} from "../../types/userTypes.ts";


export enum teacherAction{
    SET_TEACHERS = 'SET_TEACHERS'
}

export interface setTeachers {
    type : teacherAction.SET_TEACHERS, // 'FETCH_USERS_SUCCESS'
    teachers : object
}

export function teachersActionCreater(teachers : IUserInfo ) : setTeachers{
    return {type : teacherAction.SET_TEACHERS  ,  teachers : teachers}
}