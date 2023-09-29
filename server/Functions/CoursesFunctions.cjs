const Courses = require('../Modules/CoursesModule.cjs')
const ErrorHandler = require("../APIFeatures/ErrorHandler.cjs");

exports.createCourse = async (req, res, next) => {
console.log(req.body.data.course)
  const createCourse = await Courses.create({
    teacher: req.body.data.teacher,
    course: {
      durationCourse: req.body.data.course.durationCourse,
      finishCourse: req.body.data.course.finishCourse,
      image: req.body.data.course.image,
      members: req.body.data.course.members,
      name: req.body.data.course.name,
      startCourse: req.body.data.course.startCourse,
      subjects: req.body.data.course.subjects
    }
  })
  try {
    await createCourse.save()
    res.status(200).json({
      status: "Created",
      createCourse
    })
  }catch (err) {
    return next(new ErrorHandler(err, 400))
  }

}

exports.getCourses = async (req, res) => {

  const courses = await Courses.find()

  if (courses) {
    res.status(200).json({
      status: "Succeed",
      courses
    })
  } else {
    res.status(400).json({
      status: "Clear",
      message: "Courses were not found"
    })
  }
}

exports.getCourse = async (req, res) => {

  const {courseId} = req.params

  const course = await Courses.findById(courseId)

  if (course) {
    res.status(200).json({
      status: "Succeed",
      course
    })
  } else {
    res.status(400).json({
      status: "Clear",
      message: "Course was not found"
    })
  }


}