const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  CommentText: {
    type: String,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  createdAt: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  
});

module.exports = mongoose.model('comment', CommentSchema);
