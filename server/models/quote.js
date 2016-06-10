const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
  }
}, {
  autoIndex: false,
  timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);
