const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  autoIndex: false,
  timestamps: true
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
