const express = require('express');
const hostRoute = express.Router();
const {
  addBook,
  update,
  Delete,
  home,
  getUpdateForm,
  createForm,
  Adminhome
} = require('../controlers/hostControler');
const verifyToken = require('../MIddileware/auth');
const { isAdmin } = require('../MIddileware/rule');

// Book-related routes
hostRoute.post('/add-book', verifyToken, isAdmin, addBook);
hostRoute.get('/create', verifyToken, isAdmin, createForm);
hostRoute.get('/AdminDashboard', verifyToken, isAdmin, Adminhome);

hostRoute.get('/update/:id', verifyToken, isAdmin, getUpdateForm);
hostRoute.post('/update/:id', verifyToken, isAdmin, update);

hostRoute.get('/delete/:id', verifyToken, isAdmin, Delete);

module.exports = hostRoute;
