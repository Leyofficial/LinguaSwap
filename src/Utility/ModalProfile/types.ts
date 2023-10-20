import {IUserWrapperInfo} from "../../types/userTypes.ts";

export interface IModalProfile {
    modalActive : boolean,
    user : IUserWrapperInfo,
    callback : () => void
}