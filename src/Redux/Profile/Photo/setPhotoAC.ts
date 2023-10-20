

export enum PhotoActions {
    SET_PHOTO = 'SET_PHOTO',
    DELETE_PHOTO = 'DELETE_PHOTO'
}

export type IPhoto = {
    photo : string
}
interface ISetPhoto {
    type : PhotoActions.SET_PHOTO,
    photo :  IPhoto
}
interface IDeletePhoto {
    type : PhotoActions.DELETE_PHOTO
}

export type TPhotoActions = ISetPhoto | IDeletePhoto

export function setPhotoAC (photo : IPhoto) : TPhotoActions {
return {type : PhotoActions.SET_PHOTO , photo : photo }
}
export function deletePhotoAC (){
    return {type : PhotoActions.DELETE_PHOTO }
}
