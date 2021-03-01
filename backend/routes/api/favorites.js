const express = require('express');
const asyncHandler = require('express-async-handler');

const { Favorite } = require('../../db/models')
const router = express.Router();

// get a users favorited restaurants
router.get('/:userId', asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const userFavorites = await Favorite.findAll({
    where: {
      userId
    }
  })
  return res.json(userFavorites)
}))

module.exports = router;