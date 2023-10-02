const AppError = require('../APIFeatures/appError.cjs')
const catchAsync = require("../APIFeatures/catchAsync.cjs");
const {createSendToken} = require("../APIFeatures/CreateToken.cjs");
const Auth = require('../Modules/AuthorizationModules.cjs')
const ErrorHandler = require("../APIFeatures/ErrorHandler.cjs");



exports.signup = catchAsync(async (req, res, next) => {

  const newUser = await Auth.create({
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    date: new Date().toLocaleDateString(),
    user: {
      name: "",
      status: "",
      userTag: "",
      experience: "",
      bio: "",
      photo: "",
      languagesKnow: [],
      languagesLearn: [],


    }

  })
  createSendToken(newUser, 201, res)
  next()
})

exports.login = catchAsync(async (req, res, next) => {
  console.log('lohin')
  const {email, password} = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400))
  }
  const user = await Auth.findOne({email})

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }else{
    createSendToken(user, 200, res);
  }


})

exports.getAllUsers = catchAsync(async (req, res, next) => {

  const {typeOfUser} = req.params

  let filter = {}
  if (typeOfUser) {
    filter = {
      "user.status": typeOfUser
    }
  }
  const documents = Auth.find(filter);

  if (!documents) {
    next(new AppError("No documents", 400))
  }

  const users = await documents

  res.status(200).json({
    status: "Success",
    results: users.length,
    users
  })
})

exports.updateProfile = catchAsync(async (req, res, next) => {

  const user = await Auth.findByIdAndUpdate(req.params.idUser, req.body, {
    new: true, runValidators: true
  });

  if (!document) {
    return next(new ErrorHandler('No user found by id to update', 400))
  }
  res.status(200).json({
    status: "succeed",
    user
  })


})

exports.updateHandler = Model => catchAsync(async (req, res, next) => {

  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true, runValidators: true
  });

  if (!doc) {
    return next(new ErrorHandler('No document found by ID to update', 400))
  }
  console.log(doc)
  res.status(200).json({
    status: 'success',
    data: {
      date: doc
    }
  })
})