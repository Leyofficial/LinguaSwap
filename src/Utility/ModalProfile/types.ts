import {IUserWrapperInfo} from "../../types/userTypes.ts";

export interface IModalProfile {
    isMine : boolean
    modalActive : boolean,
    user : IUserWrapperInfo,
    callback : () => void
}