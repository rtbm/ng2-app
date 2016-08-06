const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  private: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  recommended: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
}, {
  autoIndex: true,
  timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);
