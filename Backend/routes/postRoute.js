const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("createdBy")
      .populate("likes")
      .populate({
        path:'comments',
        populate: {
          path:'createdBy',
          model:'user'
        }
      })
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
router.post("/", async (req, res) => {
  try {
    const data = {
      postText: req.body.postText,
      createdAt: req.body.createdAt,
      createdBy: req.body.createdBy,
      imageUrl: req.body.imageUrl,
    };

    const postRes = await Post.create(data);

    res.status(201).json(postRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Like or unlike a post
router.put("/like/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const data = {
      userId: req.body.userId,
      isLike: req.body.isLike,
    };

    const post = await Post.findById(postId);

    if (!post.likes) {
      post.likes = [];
    }

    if (data.isLike) {
      if (!post.likes.includes(data.userId)) {
        post.likes.push(data.userId);
      }
    } else {
      post.likes = post.likes.filter(userId => userId.toString() !== data.userId);
    }

    const result = await post.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
