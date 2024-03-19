// models/Like.js
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  likeCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Like', likeSchema);