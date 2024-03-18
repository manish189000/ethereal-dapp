// const User = require('../models/userModel');
// const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');

// const catchAsync = require('../utils/catchAsync');

// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   const users = await User.find();
//   res.status(200).json({
//     status: 'success',
//     results: users.length,
//     data: users
//   });
// });

// function filterObj(obj, ...allowedFields) {
//   console.log('Allowed fields: ', allowedFields);
//   const allowdFieldsObj = {};
//   Object.keys(obj).filter(item => {
//     if (allowedFields.includes(item)) {
//       allowdFieldsObj[item] = obj[item];
//     }
//   });
//   console.log(allowdFieldsObj);
//   return allowdFieldsObj;
// }

// exports.updateMe = catchAsync(async (req, res, next) => {
//   const user = await User.findById(req.user._id).select('+password');
//   if (!user) {
//     return next(new AppError('Could not find user'));
//   }
//   if (!req.body.password) {
//     return next(new AppError('Please provide a password', 400));
//   }
//   if (!(await user.comparePassword(req.body.password))) {
//     return next(new AppError('Wrong password', 401));
//   }
//   // const isPasswordTrue = await user.comparePassword(req.body.password);
//   // console.log(isPasswordTrue);
//   const filterBody = filterObj(req.body, 'name', 'email');
//   const updatedUser = await User.findByIdAndUpdate(user._id, filterBody, {
//     new: true,
//     runValidators: true
//   });
//   res.status(200).json({
//     status: 'success',
//     user: updatedUser
//   });
// });

// exports.getUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// exports.createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// exports.updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// exports.deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const { collection, addDoc } = require('firebase-admin/firestore');
const { db } = require('../firebase');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
exports.createUser = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  // Check if a document with the same metaMaskId already exists
  const userSnapshot = await db
    .collection('user')
    .where('metaMaskId', '==', id)
    .get();

  // Check if user already exists
  if (!userSnapshot.empty) {
    return res.status(200).json({
      status: 'fail',
      message: 'User with this metaMaskId already exists'
    });
  }

  // Create a new user document
  const docRef = db.collection('user').doc();
  await docRef.set({ metaMaskId: id });

  res.status(200).json({
    status: 'success'
  });
});
