const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  }
}, {
  timestamps: true,
});

const User = mongoose.model('MeridaUsers', userSchema);

module.exports = User;
