const express = require('express')

const coursesRouter = express.Router();

const coursesFunctions = require('../Functions/CoursesFunctions.cjs')

coursesRouter.route('/')
  .get(coursesFunctions.getCourses)
  .post(coursesFunctions.createCourse)

coursesRouter.route('/:courseId')
  .get(coursesFunctions.getCourse)

module.exports = coursesRouter