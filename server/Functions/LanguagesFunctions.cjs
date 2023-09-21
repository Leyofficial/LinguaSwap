
const Language = require('../Modules/LanguagesModule.cjs')

exports.getLanguages = async (req,res) => {

  const languages = await Language.find()

  if(languages) {
    res.status(200).json({
      status:'succeed',
      languages
    })
  }else{
    res.status(400).json({
      status:'Clear',
      message:"Document is clear"
    })
  }
}

exports.createLanguage = async (req,res) => {

  const {language,numberOTeachers} = req.body

  const createLanguage = new Language({
    language ,numberOTeachers
  })

  try{
    const response = await createLanguage.save()
    res.status(200).json({
      status:"Succeed",
      response
    })
  } catch (error) {
    res.status(500).json({
      status:"Failed create language",
      error
    })
  }
}

