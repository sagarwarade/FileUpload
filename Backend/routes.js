const express = require('express');
const userRouter = express.Router();
const userController = require('./controller/users');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();





userRouter.post('/add-uploadImage',multipartMiddleware,userController.postUploadImage);

//userRouter.post('/add-uploadImagefile', upload.single('file'),fileController.FileUploadExample);





module.exports = userRouter;