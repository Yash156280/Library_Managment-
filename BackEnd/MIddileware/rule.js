const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.send("Access Denied: Admins only");
  }
  next();
};

const isUser = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.send("Access Denied: Users only");
  }
  next();
};

module.exports = { isAdmin, isUser };
