const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:email', async (req, res) => {
  const Useremail = req.params.email;
  try {
    const users = await User.findOne({email:Useremail});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image // Corrected from req.body.email to req.body.image
    };

    const user = await User.findOneAndUpdate(
      { email: data.email }, // Use email as the unique identifier
      data,
      {
        new: true,
        upsert: true,
        runValidators: true
      }
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
