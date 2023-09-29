const mongoose = require('mongoose')

const CoursesSchema = new mongoose.Schema({
  teacher: {
    id: String,
    name: String,
  },
  course: {
    name: String,
    startCourse: String,
    finishCourse: String,
    durationCourse:String,
    members:[String] ,
    image:String,
    subjects:[String]
  }
})

const Courses = mongoose.model('Courses',CoursesSchema)
module.exports = Courses