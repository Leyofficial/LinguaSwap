const express = require('express')
const file = require('../APIFeatures/fileController.cjs')
const coursesRouter = express.Router();

const coursesFunctions = require('../Functions/CoursesFunctions.cjs')

coursesRouter.route('/:joinedUserId?')
  .get(coursesFunctions.getCourses)
  .post(coursesFunctions.createCourse)

coursesRouter.route('/teacher/:idTeacher')
  .get(coursesFunctions.getCourses)
coursesRouter.route('/course/:courseId')
  .get(coursesFunctions.getCourse)

coursesRouter.route('/updateMembers/:courseId')
  .patch(coursesFunctions.updateCourse)


coursesRouter.route('/image')
  .post(file.single('image'), (req, res) => {
    console.log(req.file)
    res.status(200).json({
      status: 'succeed',
      image: req.file
    })
  })

module.exports = coursesRouter