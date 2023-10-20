export enum NameAction {
    SET_NAME = 'SET_NAME'
}
export interface ISetName {
    type : NameAction.SET_NAME,
    name : string
}

export type TNameAction = ISetName

export function setNameAC(name : string) : TNameAction {
    return {
        type: NameAction.SET_NAME,
        name : name,
    }
}