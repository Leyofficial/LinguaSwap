import {initialState} from "../initialState.ts";

export const AUTH = "AUTH"
export const LOGOUT = "LOGOUT"
export const isAuthReducer = (isAuth = initialState.isAuth ,action) => {
   switch (action.type) {
      case AUTH : return true
      case LOGOUT : return  false
      default : return isAuth
   }
}