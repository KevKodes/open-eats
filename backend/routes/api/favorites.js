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

// add a favorite restaurant to table
router.post('/', asyncHandler(async (req, res) => {
  const { userId, restId } = req.body;
  const confirmed = await Favorite.create({
    userId,
    restaurantId: restId
  })
  return res.json(confirmed)
}))

// remove a favorite
router.delete('/', asyncHandler(async (req, res) => {
  const { userId, restId } = req.body;
  const fav = await Favorite.destroy({
    where: {
      userId,
      restaurantId: restId
    }
  })
  return res.json(fav)
}))

module.exports = router;