import axios from "axios";
export const ProfileUser = {
    createProfile(idUser , data) {
          return  axios.patch(`http://localhost:3000/authorization/profile/${idUser}` , {
              data
          })
      }

}

export const saveProfileImage = (image) => {
  return axios.post(`http://localhost:3000/authorization/profile/image`,image,{
    headers:{
      'content-type':'multipart/form-data'
    }
  })
}

