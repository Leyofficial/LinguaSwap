
export enum AuthActions {
   AUTH = "AUTH",
   LOGOUT = "LOGOUT"
}

interface IAuth {
   type : AuthActions.AUTH,
}
interface ILogout {
   type : AuthActions.LOGOUT
}

export type TAuthActions = IAuth | ILogout;

export const authAC = () : TAuthActions => {
   return {type : AuthActions.AUTH}
}

export const logoutAC = () : TAuthActions => {
   return {type: AuthActions.LOGOUT}
}