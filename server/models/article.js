const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
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
}, {
  autoIndex: false,
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
