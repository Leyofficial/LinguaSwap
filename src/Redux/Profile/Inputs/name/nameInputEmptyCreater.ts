export enum NameActionsInput {
    SET_EMPTY_NAME = 'SET_EMPTY_NAME'
}
export interface ISetEmptyName {
    type : NameActionsInput.SET_EMPTY_NAME,
    nameDirty : boolean
}
export type TNameActions = ISetEmptyName
export function nameInputEmptyCreater(boolean: boolean) : ISetEmptyName  {
    return {type : NameActionsInput.SET_EMPTY_NAME , nameDirty : boolean}
}