import axios from "axios"


export const loginUser = (user) => {

   return axios.post('http://localhost:3000/authorization/auth/login', {
      email: user.email,
      password: user.password
   });
}

export const registerNewUser = (user) => {
   return axios.post('http://localhost:3000/authorization', user);
}

export const saveToken = (token, idUser) => {

   return axios.patch(`http://localhost:3000/authorization/${idUser}`, {
      token
   })

}

export const savePhoto = (imagePath, idUser) => {
   return axios.patch(`http://localhost:3000/authorization/${idUser}`, {
      imagePath
   })
}


export const getUserByToken = (token) => {
   return axios.get(`http://localhost:3000/authorization/user/${token}`)
}

export const getUser = (idUser) => {
   console.log(idUser)
   return axios.get(`http://localhost:3000/authorization/${idUser}`)

}