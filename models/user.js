const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  facebookId:String,
  name:String
});
const User = mongoose.model('User',userSchema);

module.exports = User;
