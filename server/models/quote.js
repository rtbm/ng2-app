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
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ['private', 'public'],
    default: 'public'
  },
}, {
  autoIndex: false,
  timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);
