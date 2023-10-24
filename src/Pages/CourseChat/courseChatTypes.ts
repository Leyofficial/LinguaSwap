import {ILanguagesTypes} from "../../Utility/Languages/languages.ts";

interface IUserData{
    data:{
        bio:string,
        experience:string,
        languagesKnow:ILanguagesTypes,
        languagesLearn:ILanguagesTypes,
        name:string,
        photo:string,
        status:string,
        userTag:string,
        _id:string
    }
}
export interface IUser {
    date:string,
    email:string,
    online:boolean ,
    password:string,
    token:string,
    user:IUserData,
    _id:string
}