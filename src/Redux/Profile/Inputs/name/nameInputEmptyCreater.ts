export enum NameActionsInput {
    SET_EMPTY_NAME = 'SET_EMPTY_NAME'
}
export type TNameInput = {
    boolean : boolean
}
export interface ISetEmptyName {
    type : NameActionsInput.SET_EMPTY_NAME,
    nameDirty : TNameInput
}
export type TNameActions = ISetEmptyName
export function nameInputEmptyCreater(boolean : TNameInput) : TNameActions  {
    return {type : NameActionsInput.SET_EMPTY_NAME , nameDirty : boolean}
}