const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes:[{type: mongoose.Schema.Types.ObjectId,
    ref : 'user'
   }],
   comments:[{type: mongoose.Schema.Types.ObjectId,
    ref : 'comment'
   }]
});

module.exports = mongoose.model('Post', postSchema);
