export enum StatusActions {
    SET_STATUS = 'SET_STATUS'
}
interface ISetStatus {
    type : StatusActions.SET_STATUS,
    status : string
}

export type TStatusActions = ISetStatus
export function setStatusActionCreate(status: string) : TStatusActions{
return {type : StatusActions.SET_STATUS , status : status }
}
