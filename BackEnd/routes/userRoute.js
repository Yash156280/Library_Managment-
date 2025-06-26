const express=require('express');
const { readBook } = require('../controlers/userControler');
const { register, registerPost, loginGet, loginPost, logout, home } = require('../controlers/hostControler');
const { isUser } = require('../MIddileware/rule');
const verifyToken = require('../MIddileware/auth');
const userRoute=express.Router();

userRoute.get('/read',readBook)

userRoute.get('/UserDashboard', verifyToken, isUser, home);


// Auth-related routes
userRoute.get('/register', register);
userRoute.post('/register', registerPost);

userRoute.get('/login', loginGet);
userRoute.post('/login', loginPost);

userRoute.get('/logout', logout);

module.exports= userRoute;