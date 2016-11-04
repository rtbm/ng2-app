'use strict';
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  },
  recommended: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
}, {
  autoIndex: true,
  timestamps: true,
});

quoteSchema.index({
  name: 'text',
  content: 'text',
});

quoteSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Quote', quoteSchema);
