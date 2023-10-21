import axios from "axios"


export const loginUser = (user) => {

   return axios.post('https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/auth/login', {
      email: user.email,
      password: user.password
   });
}

export const registerNewUser = (user) => {
   return axios.post('https://linguaswap-9bebd1d452cf.herokuapp.com/authorization', user);
}

export const saveToken = (token, idUser) => {

   return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/${idUser}`, {
      token
   })

}

export const savePhoto = (imagePath, idUser) => {
   return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/${idUser}`, {
      imagePath
   })
}


export const getUserByToken = (token) => {
   return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/user/${token}`)
}

export const getUser = (idUser) => {
   if (idUser) {
      return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/authorization/${idUser}`)
   }


}