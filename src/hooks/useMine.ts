import {IUserInfo} from "../types/userTypes.ts";

export interface IUseMine {
    _id: string | undefined;
    callback: (b: boolean) => void;
    currentUser : IUserInfo
}

export function useMine({ _id , callback , currentUser }: IUseMine) {
    if (_id) {
        if (_id === currentUser?._id) {
            callback(false);
        } else {
            callback(true);
        }
    } else {
        callback(false);
    }
}
