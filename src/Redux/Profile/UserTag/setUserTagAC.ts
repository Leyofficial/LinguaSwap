export enum UserTagActions {
  SET_TAG = 'SET_TAG'
}
interface IUserTag {
  type : UserTagActions.SET_TAG,
  userTag : TUserTag
}
interface TUserTag {
  user : string
}

export type TUserTagActions = IUserTag

export function setUserTagAC (user : TUserTag ): TUserTagActions {
  return {type : UserTagActions.SET_TAG , userTag : user}
}