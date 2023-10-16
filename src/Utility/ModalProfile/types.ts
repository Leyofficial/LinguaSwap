export interface IModalProfile {
    modalActive: boolean,
    user : IUser
    callback: () => void
}

export interface IUser {
    id?: string,
    name: string,
    photo: string,
    userTag: string,
    languagesKnow: ILanguages[],
    bio: string,
    languagesLearn: ILanguages[],
}

export interface IUserWhole extends IUser{
    experience : string,
    status : string
}

export interface ILanguages {
    color : string,
    label : string,
}