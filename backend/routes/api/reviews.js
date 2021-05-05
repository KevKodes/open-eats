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
  // order the reviews by date here (newest first)

  //
  return res.json(reviews)
}))

// post a new review
router.post('/', asyncHandler(async (req, res) => {
  console.log('===MADE IT TO THE BACK END=== ', req.body)
  const posted = await Review.create(req.body);
  return res.json(posted)
}))

module.exports = router;