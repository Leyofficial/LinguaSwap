const express = require("express");

const authRouter = express.Router();

const authFunctions = require('../Functions/AuthorizationFunctions.cjs')
const file = require("../APIFeatures/fileController.cjs");


authRouter.route('/user/:token?')
  .get(authFunctions.getAllUsers)
  // .post(authFunctions.signup)

authRouter.route('/users/:typeOfUser?')
  .get(authFunctions.getUsersByFilter)

authRouter.route('/')
  .post(authFunctions.signup)

authRouter.route('/auth/login')
  .post(authFunctions.login)

authRouter.route('/profile/:idUser')
  .patch(authFunctions.updateProfile)

authRouter.route('/:idUser')
  .patch(authFunctions.saveToken)
  .get(authFunctions.getUser)

authRouter.route('/profile/image')
  .post(file.single('image'), (req, res) => {
    console.log(req.file)
    res.status(200).json({
      status: 'succeed',
      image: req.file
    })
  })

authRouter.route('/online')
   .patch(authFunctions.changeOnlineStatus)

module.exports = authRouter;