const express = require("express");

const authRouter = express.Router({mergeParams: true});

const authFunctions = require('../Functions/AuthorizationFunctions.cjs')


authRouter.route('/')
  .get(authFunctions.login)
  .post(authFunctions.signup)

authRouter.route('/login')
  .get(authFunctions.login)

module.exports = authRouter;