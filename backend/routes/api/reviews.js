const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models')
const router = express.Router();

// Get the reviews for one restaurant
router.get('/:restId', asyncHandler(async (req, res) => {
  const restaurantId = req.params.restId;

  const reviews = await Review.findAll({
    where: {
      restaurantId
    }
  })
  // order the reviews by date here

  //
  return res.json(reviews)
}))

module.exports = router;