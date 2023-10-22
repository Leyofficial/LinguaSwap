export enum LoginAction {
  MOVE_TO_LOGIN = "MOVE_TO_LOGIN",
  BACK_TO_LOGIN = "BACK_TO_LOGIN"
}

export interface IMoveToLogin  {
  type : LoginAction.MOVE_TO_LOGIN
}

export interface IBackToLogin  {
  type : LoginAction.BACK_TO_LOGIN
}

export type TLoginAction = IMoveToLogin | IBackToLogin

export const moveToLogin = () : TLoginAction => {
  return{
    type: LoginAction.MOVE_TO_LOGIN
  }
}

export const backFromLogin = () : TLoginAction => {
return {
  type : LoginAction.BACK_TO_LOGIN
}
}