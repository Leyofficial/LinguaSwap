import axios from "axios";

export const UserProfile = {
    getProfile(idUser){
        return  axios.get(`http://localhost:3000/authorization/${idUser}`);
    }
}