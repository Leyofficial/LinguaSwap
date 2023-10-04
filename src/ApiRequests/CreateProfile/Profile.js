import axios from "axios";
export const ProfileUser = {
    createProfile(idUser , data) {
          return  axios.patch(`http://localhost:3000/authorization/profile/${idUser}` , {
              data
          })
      }

}
