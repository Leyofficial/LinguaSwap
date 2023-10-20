export enum BioActions {
    SET_BIO = 'SET_BIO'
}

export interface ISetBio  {
    type: BioActions.SET_BIO;
    bio: TBio
}

export type TBio = {
    bio: string;
}

export type TBioActions = ISetBio

export function setBioAC(bio: TBio): TBioActions {
    return { type: BioActions.SET_BIO, bio : bio };
}
