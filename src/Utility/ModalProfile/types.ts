export interface IModalProfile {
    modalActive: boolean,
    user : IUser
    callback: () => void
}

export interface IUser {
    id: string,
    name: string,
    photo: string,
    hash: string,
    languages: ILanguages[],
    bio: string,
    languagesLearn: ILanguages[],
}

export interface ILanguages {
    color : string,
    label : string,
}