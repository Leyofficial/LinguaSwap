import axios from "axios";

export const UserProfile = {
    getProfile(idUser){
        return  axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/${idUser}`);
    }
}