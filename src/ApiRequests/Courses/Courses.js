import axios from "axios";

export const Course = {

  create(data) {
    return axios.post(`http://localhost:3000/courses`, {
      data
    })
  },
  saveImage(image) {
    console.log(image)
    return axios.post(`http://localhost:3000/courses/image`,image,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
  },

  getCourses() {
    return axios.get(`http://localhost:3000/courses`)
  },
  getCourse(courseId) {
    return axios.get(`http://localhost:3000/courses/${courseId}`)
  },

  addNewMember(updateValue,courseId){
    return axios.patch(`http://localhost:3000/courses/updateMembers/${courseId}`,{
      updateValue
    })
  }
}






