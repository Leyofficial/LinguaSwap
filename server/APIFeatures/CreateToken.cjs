const jwt = require("jsonwebtoken");
const signToken = (id) => {
  return jwt.sign({id}, "my-ultra-secure-and-ultra-long-secret", {
    expiresIn: "90d"
  })
}

exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)

  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  res.cookie('jwt', token, cookieOptions)

  res.status(statusCode).json({
    status: "success",
    token,
    user
  })
}