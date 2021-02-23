const express = require('express');
const asyncHandler = require('express-async-handler');

const { Restaurant } = require('../../db/models')
const router = express.Router();

// pull all of the restaurants for use on the home page
// should probably be updated for a specific parameter (city) when there is more data
router.get('/', asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.findAll();
  return res.json(restaurants);
}))

module.exports = router;