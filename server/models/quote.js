const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
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
