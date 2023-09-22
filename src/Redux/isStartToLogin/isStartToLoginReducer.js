import {initialState} from "../initialState.js";
import {BACK_TO_LOGIN, MOVE_TO_LOGIN} from "./isStartToLoginAC.js";

const isStartToLoginReducer = (isStartToLogin=initialState.isStart,action) => {
  switch (action.type) {

    case MOVE_TO_LOGIN : return true

    case BACK_TO_LOGIN : return false
    default:return isStartToLogin
  }
}

export default isStartToLoginReducer