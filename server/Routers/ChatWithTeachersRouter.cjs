const express = require('express')

const chatTeacherRouter = express.Router();

const chatTeacherFunctions = require('../Functions/ChatWithTeachersFunctions.cjs')

chatTeacherRouter.route('/')
   .post(chatTeacherFunctions.createChatTeacher)

chatTeacherRouter.route('/:idStudent')
   .get(chatTeacherFunctions.getChatsTeacher)

chatTeacherRouter.route('/studentsChat/:idTeacher')
   .get(chatTeacherFunctions.getChatsStudents)

chatTeacherRouter.route('/chat/:idTeacher/:idStudent')
   .get(chatTeacherFunctions.getChatTeacher)

chatTeacherRouter.route('/:idChat')
   .patch(chatTeacherFunctions.addMessageToChat)





module.exports = chatTeacherRouter