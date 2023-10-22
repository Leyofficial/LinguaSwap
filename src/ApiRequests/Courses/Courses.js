import axios from "axios";

export const Course = {

  create(data) {
    return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/singleCourse`, {
      data
    })
  },
  saveImage(image) {

    return axios.post(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/image`,image)
  },

  getCourses() {
    return axios.get(`https://linguaswap-9bebd1d452cf.herokuapp.com/courses/singleCourse`)
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






