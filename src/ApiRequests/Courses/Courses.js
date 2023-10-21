import axios from "axios";

export const Course = {

  create(data) {
    return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses`, {
      data
    })
  },
  saveImage(image) {
    console.log(image)
    return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/image`,image,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
  },

  getCourses() {
    return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses`)
  },
  getCourse(courseId) {
    console.log(courseId)
    return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/course/${courseId}`)
  },

  addNewMember(updateValue,courseId){
    return axios.patch(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/updateMembers/${courseId}`,{
      updateValue
    })
  }
}






