export enum HashActions {
    SET_EMPTY_HASH = 'SET_EMPTY_HASH'
}

export interface ISetHash {
    type : HashActions.SET_EMPTY_HASH ,
    hashDirty : boolean
}
export type THashActions = ISetHash

export function hashInputEmptyAC(value: boolean) : THashActions  {
    return {type : HashActions.SET_EMPTY_HASH , hashDirty : value}
}