const express = require('express')

const chatTeacherRouter = express.Router();

const chatTeacherFunctions = require('../Functions/ChatWithTeachersFunctions.cjs')

chatTeacherRouter.route('/')
   .post(chatTeacherFunctions.createChatTeacher)

chatTeacherRouter.route('/:idStudent')
   .get(chatTeacherFunctions.getChatsTeacher)



module.exports = chatTeacherRouter