// const express = require('express');
// const userController = require('../controllers/userController');
// const authController = require('../controllers/authController');
// const userController = require('./../controllers/userController');
// // const authController = require('./..controllers/authController');
// const router = express.Router();

// router.post('/signup', authController.signup);
// router.get('/confirmEmail/:jwt', authController.confirmEmail);

// router.post('/login', authController.login);

// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);
// router.patch(
//   '/updatePassword',
//   authController.protect,
//   authController.updatePassword
// );
// router.delete('/deleteMe', authController.protect, authController.deleteMe);
// router.patch('/updateMe', authController.protect, userController.updateMe);
// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
module.exports = router;
