import {IUserWhole} from "../../../Utility/ModalProfile/types.ts";

export interface IUserProfile {
    user : IWholeUser
}
export interface IWholeUser {
    date : string,
    email : string,
    user : IData
    _id? : string
}
export interface IData {
    data : IUserWhole
}