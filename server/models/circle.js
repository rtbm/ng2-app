const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const circleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  users: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
}, {
  autoIndex: true,
  timestamps: true,
});

module.exports = mongoose.model('Circle', circleSchema);
