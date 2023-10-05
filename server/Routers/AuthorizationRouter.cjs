const express = require("express");

const authRouter = express.Router();

const authFunctions = require('../Functions/AuthorizationFunctions.cjs')


authRouter.route('/filterUser/:typeOfUser?')
  .get(authFunctions.getAllUsers)
  .post(authFunctions.signup)

authRouter.route('/auth/login')
  .post(authFunctions.login)

authRouter.route('/profile/:idUser')
  .patch(authFunctions.updateProfile)

authRouter.route('/:idUser')
   .patch(authFunctions.saveToken)

module.exports = authRouter;