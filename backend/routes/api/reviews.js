const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, User } = require('../../db/models')
const router = express.Router();

// Get the reviews for one restaurant
router.get('/:restId', asyncHandler(async (req, res) => {
  const restaurantId = req.params.restId;

  const reviews = await Review.findAll({
    where: {
      restaurantId
    },
    include: User
  })
  // order the reviews by date here (newest first)

  //
  return res.json(reviews)
}))

// post a new review
router.post('/', asyncHandler(async (req, res) => {
  const posted = await Review.create(req.body);
  return res.json(posted)
}))

module.exports = router;