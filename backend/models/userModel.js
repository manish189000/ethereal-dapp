const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email id'],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email']
  },
  photo: String,
  role: {
    type: String,
    enum: ['admin', 'user', 'guide', 'lead-guide'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please tell us your password'],
    minLength: 8,
    maxLength: 40,
    select: false
  },
  isVerified: {
    type: Boolean,
    default: false,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function(el) {
        return this.password === el;
      },
      message: 'Passwords are not the same'
    }
  },
  passwordChangedAt: {
    type: Date,
    select: false
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.methods.comparePassword = async function(enteredPassword) {
  //VERY IMPORTANT: ALWAYS REMEMBER TO SELECT PASSWORD BECAUSE SELECT IS SET TO FALSE BEFORE USING THIS FUNCTION
  const isPasswordCorrect = await bcrypt.compare(
    enteredPassword,
    this.password
  );
  return isPasswordCorrect;
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const convertedpasswordChangedAt = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(JWTTimestamp, convertedpasswordChangedAt);
    return JWTTimestamp < convertedpasswordChangedAt;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  const token = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  console.log(token, this.passwordResetToken);
  // this.passwordResetExpires = Date.now() * 1000 * 60 * 10;
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes in milliseconds
  console.log('Date: ', this.passwordResetExpires);
  return token;
};

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
userSchema.pre(/^find/, async function(next) {
  //filter out all data that has active as false
  this.find({ active: { $ne: false } });
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;
