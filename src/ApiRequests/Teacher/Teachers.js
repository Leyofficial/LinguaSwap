import axios from "axios";

export const Teachers = {
    getTeachers() {
        return  axios.get('http://localhost:3000/authorization/users/Teacher')
    }
}
