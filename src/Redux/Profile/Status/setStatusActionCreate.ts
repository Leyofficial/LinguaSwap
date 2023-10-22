export enum StatusActions {
    SET_STATUS = 'SET_STATUS'
}
interface ISetStatus {
    type : StatusActions.SET_STATUS,
    status : TStatus
}
export interface TStatus {
    status : string
}

export type TStatusActions = ISetStatus
export function setStatusActionCreate(status : TStatus) : TStatusActions{
return {type : StatusActions.SET_STATUS , status : status }
}
