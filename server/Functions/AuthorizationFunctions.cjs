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
      token: "",
      online: true,
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

   const {email, password} = req.body;
console.log(`email` + email)
   if (!email || !password) {
      return next(new AppError('Please provide email and password', 400))
   }
   const user = await Auth.findOne({email})

   if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
   } else {
      createSendToken(user, 200, res);
   }


})

exports.getAllUsers = catchAsync(async (req, res, next) => {

   const params = req.params
   let filter = {}

   if (params.token) {
      filter = {
         "token": params.token
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

exports.getUsersByFilter = catchAsync(async (req, res, next) => {

   const {typeOfUser} = req.params



   const documents = Auth.find({"user.data.status": typeOfUser});

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

   const user = await Auth.findByIdAndUpdate(req.params.idUser, {user: req.body}, {
      new: true, runValidators: true
   });

   if (!user) {
      return next(new ErrorHandler('No user found by id to update', 400))
   }
   res.status(200).json({
      status: "succeed",
      user
   })


})

exports.saveToken = async (req, res) => {

   // const {token,imagePath} = req.body
   const {idUser} = req.params

   let dataToUpdate = {}

   if (req.body.token) {
      dataToUpdate = {
         "token": req.body.token
      }
   } else if (req.body.imagePath) {
      dataToUpdate = {"user.data.photo": req.body.imagePath}
   }

   const user = await Auth.findByIdAndUpdate(idUser, dataToUpdate)

   if (!user) {
      res.status(400).json({
         status: 'Error',
         message: 'User was not found'
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         message: 'Token was saved'
      })
   }
}

exports.getUser = async (req, res) => {


   const {idUser} = req.params

   const user = await Auth.findById(idUser)


   if (!user) {
      res.status(400).json({
         status: 'Error',
         message: "User was not found"
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         user
      })
   }
}

exports.changeOnlineStatus = async (req, res) => {

   const {idUser} = req.params

   const {onlineStatus} = req.body

   const user = await Auth.findOneAndUpdate({_id:idUser}, {online: onlineStatus})

   if (!user) {
      res.status(400).json({
         status: "Error",
         message: "Some error during process changing online status"
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         user
      })
   }
}