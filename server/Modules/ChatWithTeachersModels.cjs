const mongoose = require('mongoose');

const ChatWithTeacherSchema = new mongoose.Schema({
   idTeacher: String,
   idStudent: String,
   messages: [{
      text: String,
      date: new Date(),
      author: String,
      idMessage:Number
   }] | []
})

const ChatTeacher = mongoose.model('ChatWithTeachers',ChatWithTeacherSchema)
module.exports = ChatTeacher