import {IUserInfo} from "../../types/userTypes.ts";
import {IUser} from "../../Pages/CourseChat/courseChatTypes.ts";

export enum loginActions {
    SET_LOGIN_USER = 'SET_LOGIN_USER'
}

export interface setLoginUser {
    type : loginActions.SET_LOGIN_USER ,
    user : IUser
}

export function loginUserAC (user : IUser) : setLoginUser  {
    return {type : loginActions.SET_LOGIN_USER , user : user}
}