const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
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
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
  }
}, {
  autoIndex: false,
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
