import {initialState} from "../initialState.js";
import {SET_LOGIN_USER} from "./loginUserAC.js";

export function loginUserReducer(state = initialState.loginUser , action){
switch (action.type) {
    case SET_LOGIN_USER :
        return action.user
    default : return state
}
}
