const express = require('express');
const asyncHandler = require('express-async-handler');

const { Photo } = require('../../db/models')
const router = express.Router();

// Get the photos for one restaurant
router.get('/:restaurantId', asyncHandler(async (req, res) => {
  const restaurantId = req.params.restaurantId;

  const photos = await Photo.findAll({
    where:{
      restaurantId
    }
  })
  return res.json(photos)
}))

module.exports = router;