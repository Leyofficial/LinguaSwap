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

<<<<<<< HEAD
export const getUser = async (idUser) => {

    if(idUser !== 'default' && idUser) {
        try{
            let response = await axios.get(`http://localhost:3000/authorization/${idUser}`)

            return response.data
        }
        catch (error) {
            console.log(error)

        }
    }


=======
export const getUser = (idUser) => {
   return axios.get(`http://localhost:3000/authorization/${idUser}`)
>>>>>>> 643f76ace336b8c32896b2a86575a8afab9e9e53
}