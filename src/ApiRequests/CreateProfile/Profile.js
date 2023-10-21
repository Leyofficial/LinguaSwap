import axios from "axios";
export const ProfileUser = {
    createProfile(idUser , data) {
          return  axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/profile/${idUser}` , {
              data
          })
      }

}

export const    saveProfileImage = (image) => {
  return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/profile/image`,image,{
    headers:{
      'content-type':'multipart/form-data'
    }
  })
}

