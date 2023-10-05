import axios from "axios"


export const loginUser = (user) => {
    console.log(user)
    return axios.post('http://localhost:3000/authorization/auth/login', {
        email: user.email,
        password: user.password
    });
}

export const registerNewUser = (user) => {
    return axios.post('http://localhost:3000/authorization', user);
}

export const saveToken = (token,idUser) => {
    console.log('s')
    return axios.patch(`http://localhost:3000/authorization/${idUser}`,{
        token
    })

}