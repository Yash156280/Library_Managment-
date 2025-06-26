const userModel = require('../models/productModel');

exports.readBook= async (req, res) => {
  let users = await userModel.find();
  res.send(users);
}
