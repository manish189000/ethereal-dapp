// const User = require('../models/userModel');
// const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');
// const sendEmail = require('../utils/email');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { promisify } = require('util');
// const crypto = require('crypto');

// const getJwt = id => {
//   const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.EXPIRES_IN
//   });
//   return token;
// };

// function createSendToken(id, user, status, res) {
//   const token = getJwt(id);
//   const cookieOptions = {
//     expire: new Date(
//       Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true
//   };
//   if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

//   res.cookie('jwt', token, cookieOptions);
//   res.status(status).json({
//     status: 'success',
//     user,
//     token
//   });
// }
// // console.log(process.env.JWT_SECRET);
// exports.signup = catchAsync(async (req, res, next) => {
//   const user = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     passwordConfirm: req.body.passwordConfirm,
//     passwordChangedAt: req.body?.passwordChangedAt,
//     role: req.body?.role
//   });
//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: '1d'
//   });
//   const confirmEmailURL = `${req.protocol}://${req.get(
//     'host'
//   )}/api/v1/users/confirmEmail/${token}`;
//   const message = `Please got to ${confirmEmailURL} to confirm your email to activate your account.`;
//   user.password = undefined;
//   try {
//     await sendEmail({
//       email: user.email,
//       subject: 'Confirm your email id (valid for 1 day)',
//       message
//     });
//     res.status(200).json({
//       status: 'success',
//       message: 'Check your email to verify your account',
//       user
//     });
//   } catch (err) {
//     return next(
//       new AppError(
//         'There was an error sending the email, please try again later',
//         500
//       )
//     );
//   }
//   // res.status(201).json({
//   //   status: 'success',
//   //   user,
//   //   token,
//   //   message
//   // });
// });

// exports.confirmEmail = catchAsync(async (req, res, next) => {
//   const decoded = await promisify(jwt.verify)(
//     req.params.jwt,
//     process.env.JWT_SECRET
//   );
//   const user = await User.findById(decoded.id);
//   if (!user) {
//     return next(
//       new AppError(
//         'This user does not exist, try creating your account again',
//         401
//       )
//     );
//   }
//   await User.findByIdAndUpdate(
//     user._id,
//     {
//       isVerified: true
//     },
//     {
//       new: true
//     }
//   );
//   createSendToken(user._id, user, 200, res);
// });

// exports.login = catchAsync(async (req, res, next) => {
//   if (!req.body.email || !req.body.password) {
//     return next(new AppError('Please provide email and password', 400));
//   }

//   const user = await User.findOne({ email: req.body.email }).select(
//     '+password +isVerified'
//   );

//   if (!user || !(await user.comparePassword(req.body.password))) {
//     return next(new AppError('Invalid password or email', 401));
//   }

//   if (!user.isVerified) {
//     return next(new AppError('Your email is not verified', 401));
//   }
//   createSendToken(user._id, user, 200, res);
// });

// exports.protect = catchAsync(async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   }
//   if (!token) {
//     return next(
//       new AppError('You are not logged in. Log in to get access', 401)
//     );
//   }
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//   const currentUser = await User.findById(decoded.id).select(
//     '+passwordChangedAt'
//   );
//   // console.log(currentUser);
//   if (!currentUser) {
//     return next(
//       new AppError('The user to which the token belongs no longer exists', 401)
//     );
//   }
//   console.log(currentUser.changedPasswordAfter(decoded.iat));
//   if (currentUser.changedPasswordAfter(decoded.iat)) {
//     return next(
//       new AppError('User changed password recently, Log in again', 401)
//     );
//   }
//   req.user = currentUser;
//   next();
// });
// exports.restrictTo = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(new AppError('You do not have the permission', 403));
//     }
//     next();
//   };
// };

// exports.forgotPassword = catchAsync(async (req, res, next) => {
//   //Get email and check if it exists in the database
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return next(new AppError('There is no user with this email', 404));
//   }

//   //2 generate a 32 byte token using crypto module and hash it with sha256 algorithm
//   const resetToken = user.createPasswordResetToken();
//   await user.save({ validateBeforeSave: false });

//   // 3
//   const resetURL = `${req.protocol}://${req.get(
//     'host'
//   )}/api/v1/users/resetPassword/${resetToken}`;
//   const message = `Forgot your password? Submit a patch request with your new password and confirm password to ${resetURL}. \nIf you did not forget your password then please ignore this email`;
//   try {
//     await sendEmail({
//       email: user.email,
//       subject: 'Your password reset token (valid for 10 minute)',
//       message
//     });
//     res.status(200).json({
//       status: 'success',
//       message: 'Token sent to email'
//     });
//   } catch (err) {
//     user.passwordResetToken = undefined;
//     user.passwordResetExpires = undefined;
//     await user.save({ validateBeforeSave: false });
//     return next(
//       new AppError(
//         'There was an error sending the email, please try again later',
//         500
//       )
//     );
//   }
// });

// exports.resetPassword = catchAsync(async (req, res, next) => {
//   //1 Get user based on token and encypt it
//   const hashedToken = crypto
//     .createHash('sha256')
//     .update(req.params.token)
//     .digest('hex');

//   const user = await User.findOne({
//     passwordResetToken: hashedToken,
//     passwordResetExpires: { $gte: Date.now() }
//   });

//   if (!user) {
//     return next(new AppError('Token is invalid or has expired', 400));
//   }

//   user.password = req.body.password;
//   user.passwordConfirm = req.body.passwordConfirm;
//   user.passwordResetExpires = undefined;
//   user.passwordResetToken = undefined;

//   user.passwordChangedAt = Date.now();
//   await user.save();
//   // const jwt = getJwt(user._id);
//   // // user.password = ""
//   // res.status(200).json({
//   //   status: 'success',
//   //   token: jwt
//   // });
//   createSendToken(user._id, user, 200, res);
// });

// exports.updatePassword = catchAsync(async (req, res, next) => {
//   //1 Get the user from database
//   const user = await User.findOne({ email: req.user.email }).select(
//     '+password'
//   );
//   if (!user) {
//     return next(new AppError('You are not logged in, log in again', 401));
//   }

//   if (!(await user.comparePassword(req.body.currentPassword))) {
//     return next(new AppError('Current password is incorrect, try again', 401));
//   }

//   user.password = req.body.newPassword;
//   user.passwordConfirm = req.body.confirmNewPassword;
//   user.passwordChangedAt = Date.now();

//   await user.save();
//   createSendToken(user._id, user, 200, res);
// });

// exports.deleteMe = catchAsync(async (req, res, next) => {
//   await User.findByIdAndUpdate(req.user._id, { active: false });
//   res.status(203).json({
//     status: 'success',
//     data: null
//   });
// });
