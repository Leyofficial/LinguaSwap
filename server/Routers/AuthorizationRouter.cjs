const express = require("express");

const authRouter = express.Router();

const authFunctions = require('../Functions/AuthorizationFunctions.cjs')


authRouter.route('/:typeOfUser?')
  .get(authFunctions.getAllUsers)
  .post(authFunctions.signup)

authRouter.route('/auth/login')
  .get(authFunctions.login)

authRouter.route('/profile/:idUser')
  .patch(authFunctions.updateProfile)

module.exports = authRouter;