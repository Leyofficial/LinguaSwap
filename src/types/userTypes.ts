import {ILanguagesTypes} from "../Utility/Languages/languages.ts";

export interface IUserInfo {
        _id: string;
        email: string;
        date: string;
        token: string;
        user: {
            data: {
                name: string;
                status: string;
                userTag: string;
                experience: string;
                bio: string;
                photo: string;
                languagesKnow: ILanguagesTypes[];
                languagesLearn: ILanguagesTypes[];
            };
        };
}

export interface IUserOutside {
    isMine? : boolean
    user: IUserInfo
}

export interface IUserWrapperInfo {
    _id: string,
    name: string,
    status?: string,
    userTag: string,
    experience?: string,
    bio: string,
    photo: string,
    languagesKnow: ILanguagesTypes[],
    languagesLearn: ILanguagesTypes[]
}

