const express = require('express');
const asyncHandler = require('express-async-handler');

const { Reservation } = require('../../db/models')
const router = express.Router();

// post a single reservation
router.post('/', asyncHandler(async (req, res) => {
  console.log("req.body: ", req.body)
  const confirmed = await Reservation.create(req.body);
  return res.json(confirmed)
}))

module.exports = router;