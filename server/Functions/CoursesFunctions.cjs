
const Courses = require('../Modules/CoursesModule.cjs')
const ErrorHandler = require("../APIFeatures/ErrorHandler.cjs");

exports.createCourse = async (req, res, next) => {
   console.log(req.body)

   const createCourse = await Courses.create({
      teacher: req.body.data.teacher,
      course: {
         durationCourse: req.body.data.course.durationCourse,
         finishCourse: req.body.data.course.finishCourse,
         image: req.body.data.course.image,
         members: req.body.data.course.members,
         name: req.body.data.course.name,
         startCourse: req.body.data.course.startCourse,
         subjects: req.body.data.course.subjects,
         level: req.body.data.course.level,
         language: req.body.data.course.language
      }
   })
   try {
      await createCourse.save()
      res.status(200).json({
         status: "Created",
         createCourse
      })
   } catch (err) {
      return next(new ErrorHandler(err, 400))
   }

}

exports.getCourses = async (req, res) => {

   const {joinedUserId, idTeacher} = req.params
   let filter = {}
   if (joinedUserId) {
      filter = {
         "course.members": joinedUserId
      }
      if (idTeacher) {
         filter = {
            "teacher": idTeacher
         }
      }
   }

   const courses = await Courses.find(filter)

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
   console.log('getCourse')
   const {courseId} = req.params

   const course = await Courses.findById(courseId)
   console.log(course)
   if (course) {
      res.status(200).json({
         status: "Succeed",
         course
      })
   } else {
      res.status(400).json({
         status: "Clear",
         message: "Courses was not found"
      })
   }
}

exports.updateCourse = async (req, res, next) => {


   const {courseId} = req.params
   const {updateValue} = req.body

   const updateCourse = await Courses.findByIdAndUpdate(courseId,
      {$addToSet: {"course.members": {$each: [updateValue]}}}
   )

   if (!updateCourse) {
      res.status(400).json({
         status: "Error",
         message: "Some error to update course"
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         updateCourse
      })
   }
}
