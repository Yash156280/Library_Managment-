// routes/borrowRoute.js
const express = require("express");
const borrowRoute = express.Router();
const verifyToken = require("../MIddileware/auth");
const { isAdmin } = require("../MIddileware/rule");
const { borrowBook, viewBorrows, approveBorrow } = require("../controlers/BorrowController");


borrowRoute.post("/borrow", verifyToken, borrowBook);
borrowRoute.get("/viewBorrows", verifyToken, isAdmin, viewBorrows);
borrowRoute.post("/borrow/approve/:id", verifyToken, isAdmin, approveBorrow);

module.exports = borrowRoute;
