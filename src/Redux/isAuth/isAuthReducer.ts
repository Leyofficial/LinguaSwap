import {initialState} from "../initialState.ts";
import {AuthActions, TAuthActions} from "./isAuthAC.ts";

export const isAuthReducer = (isAuth = initialState.isAuth ,action : TAuthActions ) : boolean  => {
   switch (action.type) {
      case AuthActions.AUTH  : return true
      case AuthActions.LOGOUT : return  false
      default : return isAuth
   }
}