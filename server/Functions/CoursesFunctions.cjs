
const Courses = require('../Modules/CoursesModule.cjs')

exports.createCourse = async (req,res) => {

  const createCourse = await Courses.create(req.body)

  try{
    const response = await createCourse.save()
    res.status(200).json({
      status:"Created",
      response
    })
  } catch (error) {
    res.status(500).json({
      status:'Failed create language',
      error
    })
  }
}

exports.getCourses = async (req,res) => {

  const courses = await Courses.find()

  if(courses) {
    res.status(200).json({
      status:"Succeed",
      courses
    })
  }else{
    res.status(400).json({
      status:"Clear",
      message:"Courses were not found"
    })
  }
}

exports.getCourse = async (req,res) => {

  const {courseId} = req.params

  const course = await Courses.findById(courseId)

  if(course) {
    res.status(200).json({
      status:"Succeed",
      course
    })
  }else{
    res.status(400).json({
      status:"Clear",
      message:"Course was not found"
    })
  }


}