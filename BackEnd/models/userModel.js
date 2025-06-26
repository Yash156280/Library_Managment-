
const mongoose=require('mongoose')

const URL="mongodb://127.0.0.1:27017/Library"
mongoose.connect(URL);


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],  
    default: 'user'           
  }
});

module.exports = mongoose.model('User', userSchema);














