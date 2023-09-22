const mongoose = require('mongoose')

const LanguagesSchema = new mongoose.Schema({
  language:{
    type : String,
    required:[true,"The language mast have"],
    unique:true,
    trim:true
  },
  numberOTeachers:Number,
})

const Language = mongoose.model('languages',LanguagesSchema)
module.exports = Language