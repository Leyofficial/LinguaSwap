export const SET_NAME = 'SET_NAME'

export function setNameAC(name) {
    return {
        type: SET_NAME,
        name : name,
    }
}