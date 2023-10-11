export const SET_LOGIN_USER = 'SET_LOGIN_USER';

export function loginUserAC (user) {
    return {type : SET_LOGIN_USER , user : user}
}