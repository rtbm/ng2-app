const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: true,
  },
  visiblility: {
    type: String,
    enum: ['private', 'public']
  },
}, {
  autoIndex: false,
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
