

export const MOVE_TO_LOGIN = "MOVE_TO_LOGIN"
export const BACK_TO_LOGIN = "BACK_TO_LOGIN"
export const moveToLogin = () => {
  return{
    type:MOVE_TO_LOGIN
  }
}

export const backFromLogin = () => {
return {
  type : BACK_TO_LOGIN
}
}