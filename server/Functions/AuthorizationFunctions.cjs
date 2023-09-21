const jwt = require('jsonwebtoken');
const AppError = require('../APIFeatures/appError')
const catchAsync = require("../APIFeatures/catchAsync.js");
const signToken = (id) => {
  return jwt.sign({id},"my-ultra-secure-and-ultra-long-secret",{
    expiresIn:"90d"
  })
}