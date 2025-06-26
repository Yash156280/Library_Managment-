// verifyToken.js
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.tokan;
  if (!token) return res.redirect("/login");

  try {
    const decoded = jwt.verify(token, "yyyyyyy");

    // ✅ Important fix: real user fetch karo DB se
    const user = await UserModel.findOne({ email: decoded.email });
    if (!user) return res.redirect("/login");

    req.user = user; // ✅ Ab yeh proper user document hai (with _id)
    next();
  } catch (err) {
    res.clearCookie("tokan");
    return res.redirect("/login");
  }
};

module.exports = verifyToken;
