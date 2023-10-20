import {initialState} from "../initialState.ts";
import {loginActions, loginUserAC, setLoginUser} from "./loginUserAC.js";
import {getUserByToken} from "../../ApiRequests/Courses/AuthUser.js";
import {Dispatch} from "redux";
import {IUserInfo} from "../../types/userTypes.ts";
export function loginUserReducer(state: IUserInfo[]  = initialState.loginUser, action : setLoginUser) : IUserInfo[] {
    switch (action.type) {
        case  loginActions.SET_LOGIN_USER :
            return action.user
        default :
            return state
    }
}


export const loginUserThunkCreator = (userToken : string) => {
    return async (dispatch : Dispatch) => {
        try {
            const res = await getUserByToken(userToken)
            if (res.status === 200) {
                dispatch(loginUserAC({...res.data.users[0]}));
            }
        } catch (err) {
            console.log(err)
        }
    }
}