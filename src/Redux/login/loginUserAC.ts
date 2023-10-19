import {IUserInfo} from "../../types/userTypes.ts";

export enum loginActions {
    SET_LOGIN_USER = 'SET_LOGIN_USER'
}

export interface setLoginUser {
    type : loginActions.SET_LOGIN_USER ,
    user : IUserInfo[]
}

export function loginUserAC (user) : setLoginUser {
    return {type : loginActions.SET_LOGIN_USER , user : user}
}