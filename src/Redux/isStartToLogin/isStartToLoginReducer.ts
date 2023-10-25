import {initialState} from "../initialState.ts";
import {LoginAction, TLoginAction} from "./isStartToLoginAC.js";

const isStartToLoginReducer = (isStartToLogin= initialState.isStart, action : TLoginAction) : boolean => {
  switch (action.type) {
    case LoginAction.MOVE_TO_LOGIN : return true

    case LoginAction.BACK_TO_LOGIN : return false
    default:return isStartToLogin
  }
}

export default isStartToLoginReducer