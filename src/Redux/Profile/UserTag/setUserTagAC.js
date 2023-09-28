export const SET_TAG = 'SET_TAG'
export function setUserTagAC (name) {
  return {type : SET_TAG , userTag : name}
}