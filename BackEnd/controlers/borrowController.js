// controllers/borrowController.js
const mongoose = require('mongoose'); 
const BorrowModel = require("../models/BorrowModel");
const ProductModel = require("../models/productModel");


exports.borrowBook = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.body.bookId)) {
      return res.status(400).send("Invalid Book ID");
    }

    const book = await ProductModel.findById(req.body.bookId);
    if (!book) return res.status(404).send("Book not found");

    if (book.stock > 0) {
      
      await BorrowModel.create({
        user: req.user._id,
        book: req.body.bookId,
        status: "approved"
      });

      book.stock -= 1;
      await book.save();

      res.send("Book Borrowed and Approved Automatically");
    } else {
      
      await BorrowModel.create({
        user: req.user._id,
        book: req.body.bookId,
        status: "pending"
      });

      res.send("Book Requested! Waiting for Admin Approval");
    }
  } catch (err) {
    console.log("Borrow Error:", err);
    res.status(500).send("Borrow Failed");
  }
};

exports.viewBorrows = async (req, res) => {
  const borrows = await BorrowModel.find().populate("userId").populate("bookId");
  res.render("adminBorrowList", { borrows });
};

exports.approveBorrow = async (req, res) => {
  const borrow = await BorrowModel.findById(req.params.id);

  if (borrow.status === "pending") {
    borrow.status = "approved";
    await borrow.save();

    
    const book = await ProductModel.findById(borrow.book);
    book.stock -= 1;
    await book.save();
  }

  res.redirect("/host/viewBorrows");
};
