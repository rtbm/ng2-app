'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    sparse: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    sparse: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  profile: {
    first_name: {
      type: String,
      default: '',
      trim: true,
    },
    last_name: {
      type: String,
      default: '',
      trim: true,
    },
    bio: {
      type: String,
      default: '',
      trim: true,
    },
    avatar: {
      type: String,
      default: '',
      trim: true,
    },
  },
  following: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
}, {
  autoIndex: true,
  timestamps: true,
});

userSchema.methods.verifyPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, result) {
    if (err) { callback(err, null); }
    callback(null, result);
  });
};

userSchema.pre('save', function(next) {
  const account = this;

  if (!account.isModified('password')) { return next(); }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(account.password, salt, null, function(err, encrypted) {
      if (err) { return next(err); }
      account.password = encrypted;
      return next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
