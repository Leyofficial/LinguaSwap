import axios from "axios";

export const Teachers = {
    getTeachers() {
        return  axios.get('https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/users/Teacher')
    }
}
