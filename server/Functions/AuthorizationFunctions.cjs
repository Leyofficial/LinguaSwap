const AppError = require('../APIFeatures/appError.cjs')
const catchAsync = require("../APIFeatures/catchAsync.cjs");
const {createSendToken} = require("../APIFeatures/CreateToken.cjs");
const Auth = require('../Modules/AuthorizationModules.cjs')



exports.signup = catchAsync(async (req,res,next) => {

  if(req.body.status.typeOfUser === 'Tutor') {
    const newUser = await Auth.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      confirmPassword:req.body.confirmPassword,
      date:new Date().toLocaleDateString(),
      status:{
        typeOfUser: req.body.status.typeOfUser,
        experience: req.body.status.experience,
        aboutMe: req.body.status.aboutMe,
        language:req.body.status.language,
      }
    })
    createSendToken(newUser,201,res)

  }else if(req.body.status.typeOfUser === 'Student') {
    const newUser = await Auth.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      confirmPassword:req.body.confirmPassword,
      date:new Date().toLocaleDateString(),
      status:{
        typeOfUser: req.body.status.typeOfUser,
        language:req.body.status.language,
        goal:req.body.status.goal
      }
    })
    createSendToken(newUser,201,res)
  }

})

exports.login = catchAsync(async (req,res,next) => {
  const {email , password} = req.body;

  if(!email || !password) {
    return next(new AppError('Please provide email and password',400))
  }
  const user = await Auth.findOne({email})

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(user, 200, res);
  next()
})

exports.getAllUsers = catchAsync(async (req,res,next) => {
  const {typeOfUser} = req.params

  const filter = typeOfUser ? "status.typeOfUser":typeOfUser || null

  const documents = Auth.find({filter})

  if(!documents){
    next(new AppError("No documents",400))
  }
  let doc = await documents.query

  const users = await doc

  res.status(200).json({
    status:"Success",
    results:users.length,
    users
  })
})