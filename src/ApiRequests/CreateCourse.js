import axios from "axios";

export const Course = {

  create(data) {

    return axios.post(`http://localhost:3000/courses`, {
      data
    })
  },
  saveImage(image) {
    return axios.post(`http://localhost:3000/courses/image`,image,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
  }
}

