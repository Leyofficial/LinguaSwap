import axios from "axios";
import {IUserResponse} from "../../types/userTypes.ts";

export const Teachers = {
    getTeachers() {
        return  axios.get<IUserResponse>('https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/users/Teacher')
    }
}
