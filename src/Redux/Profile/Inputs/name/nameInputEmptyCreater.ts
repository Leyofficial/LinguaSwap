export enum NameActions {
    SET_EMPTY_NAME = 'SET_EMPTY_NAME'
}
export type TName = {
    boolean : boolean
}
export interface ISetEmptyName {
    type : NameActions.SET_EMPTY_NAME,
    nameDirty : TName
}
export type TNameActions = ISetEmptyName
export function nameInputEmptyCreater(boolean : TName) : TNameActions  {
    return {type : NameActions.SET_EMPTY_NAME , nameDirty : boolean}
}