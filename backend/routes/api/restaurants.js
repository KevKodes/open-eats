const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Restaurant } = require('../../db/models')

// pull all of the restaurants for use on the home page
// should probably be updated for a specific parameter (city) when there is more data
router.get('/', asyncHandler(async (res, req) => {
  const restaurants = await Restaurant.findAll();
  return res.json(restaurants);
}))
