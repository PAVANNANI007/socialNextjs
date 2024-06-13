const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  commentText: {
    type: String,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
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
