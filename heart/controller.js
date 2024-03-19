// routes/likes.js
const express = require('express');
const router = express.Router();
const Like = require('./schema');

// POST route to add a like
router.post('/like', async (req, res) => {
  const { itemId } = req.body;

  try {
    let like = await Like.findOne({ itemId });

    if (!like) {
      like = new Like({ itemId });
    }

    like.likeCount += 1;
    await like.save();

    res.json(like);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE route to remove a like
router.delete('/like/:itemId', async (req, res) => {
  const { itemId } = req.params;

  try {
    let like = await Like.findOne({ itemId });

    if (!like) {
      return res.status(404).json({ msg: 'Like not found' });
    }

    like.likeCount -= 1;
    await like.save();

    res.json(like);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
