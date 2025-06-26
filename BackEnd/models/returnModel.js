const { model } = require('mongoose')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Library')
const returnModel = mongoose.Schema({
  borrowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'borrow',
    reqired: true
  },
  returnDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  }
})

module.exports = mongoose.model('Return', returnModel)