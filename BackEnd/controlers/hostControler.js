
const ProductModel = require('../models/productModel');
const userModels = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.addBook = async (req, res) => {
  try {
    await ProductModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      brand: req.body.brand,
      stock: req.body.stock,
      imageUrl: req.body.imageUrl
    });
    res.redirect('/user/UserDashbord');
  } catch (err) {
    res.status(500).send("Book creation failed");
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description, price, category, brand, stock, imageUrl } = req.body;
    await ProductModel.findOneAndUpdate({ _id: req.params.id },{ name, description, price, category, brand, stock, imageUrl },{ new: true }
    );
    res.redirect('/user/read');
  } catch (err) {
    res.status(500).send("Update failed");
  }
};

exports.Delete = async (req, res) => {
  try {
    await ProductModel.findOneAndDelete({ _id: req.params.id });
    res.redirect('/user/read');
  } catch (err) {
    res.status(500).send("Delete failed");
  }
};

exports.home = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.render('UserDashbord', { products, user: req.user });
  } catch (err) {
    res.status(500).send("Failed to load home");
  }
};
exports.Adminhome = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.render('AdminDashbord', { products, user: req.user }); 
  } catch (err) {
    res.status(500).send("Failed to load home");
  }
};

exports.getUpdateForm = async (req, res) => {
  try {
    const book = await ProductModel.findById(req.params.id);
    res.render('updateForm', { book });
  } catch (err) {
    res.status(500).send("Failed to get update form");
  }
};

exports.createForm = (req, res) => {
  res.render('form');
};

exports.registerPost = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await userModels.findOne({ email });
    if (existingUser) return res.send("User already exists");

    const hash = await bcrypt.hash(password, 10);

    const user = await userModels.create({
      name,
      email,
      password: hash,
      role: 'user'
    });

    const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, "yyyyyyy");
    res.cookie('tokan', token);
    res.redirect('/user/login');
  } catch (err) {
    res.status(500).send("Registration Failed");
  }
};

exports.logout = (req, res) => {
  res.cookie('tokan', '');
  res.redirect('/user/register');
};

exports.loginGet = (req, res) => {
  res.render('login');
};

exports.loginPost = async (req, res) => {
  try {
    const user = await userModels.findOne({ email: req.body.email });
    if (!user) return res.send("Email Or Password Is Incorrect");

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.send("Email Or Password Is Incorrect");

    const token = jwt.sign(
      { _id: user._id, email: user.email, role: user.role },
      "yyyyyyy"
    );

    res.cookie('tokan', token);

    if (user.role === 'admin') {
      res.redirect('/host/AdminDashboard');
    } else {
      res.redirect('/user/UserDashboard');
    }
  } catch (err) {
    res.status(500).send("Login Failed");
  }
};

exports.register = (req, res) => {
  res.render('register');
};
