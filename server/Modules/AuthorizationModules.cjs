const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authSchema = new mongoose.Schema({
  name: {
    type: String,
<<<<<<< HEAD
    // unique: true,
    trim: true
  },
=======
    trim: true,
    required: [false,'sda'],
    unique: [false,'asdsd'],
  } ,
>>>>>>> d089b5b8d0114a8ad96633808c87dadaf0549512
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    trim: true,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  date: String,
  status: {
    typeOfUser: String,
    experience: String,
    aboutMe: String,
    language: [String] || String,
    goal: String
  } | null,
})


authSchema.pre('save', async function (next) {

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});


authSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword)
}
const Auth = mongoose.model("Authorization", authSchema);
module.exports = Auth