const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authSchema = new mongoose.Schema({
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
  token:String,
  date: String,
  online:Boolean,
  user: {
    name: {
      type: String,
      trim: true,
      required: [false,'Not a required'],
      unique: [false,'Not a unique'],
    },
    status: String,
    experience: String,
    bio: String,
    languagesKnow: [String] | [],
    languagesLearn: [String] | [],
    userTag:String,
    photo:String,
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