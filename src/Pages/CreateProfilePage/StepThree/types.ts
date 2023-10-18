import {ILanguages} from "../../../Utility/ModalProfile/types.ts";

export interface IUserObj {
    name : string,
    status: string,
    userTag : string,
    experience: string,
    bio: string,
    photo: string,
    languagesKnow: ILanguages[],
    languagesLearn: ILanguages[],
}