const express = require("express");


const languageRouter = express.Router({mergeParams: true});

const languageFunctions = require('../Functions/LanguagesFunctions.cjs')

languageRouter.route('/')
  .get(languageFunctions.getLanguages)
  .post(languageFunctions.createLanguage)


module.exports = languageRouter