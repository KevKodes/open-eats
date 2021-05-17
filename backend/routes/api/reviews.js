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
    include: User,
    order: [['createdAt', 'DESC']]
  })
  return res.json(reviews)
}))

// post a new review
router.post('/', asyncHandler(async (req, res) => {
  const posted = await Review.create(req.body);
  return res.json(posted)
}))

// delete a review
router.delete('/:reviewId', asyncHandler(async (req, res) => {
  const reviewId = req.params.reviewId;

  const revId = await Review.destroy({
    where: {
      id: reviewId
    }
  })

  return res.status(200).json({ status: "ok" })
}))

// edit a review (patch)
router.patch('/', asyncHandler(async (req, res) => {
  console.log('update this mofo: ', req.body)
  const { id, 
    overallRating, 
    foodRating, 
    serviceRating, 
    ambienceRating, 
    description } = req.body;
  const review = await Review.findByPk(id)
  await review.update({
    overallRating,
    foodRating,
    serviceRating,
    ambienceRating,
    description
  })
  return res.json(review);
}))


module.exports = router;