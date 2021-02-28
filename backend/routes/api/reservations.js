const express = require('express');
const asyncHandler = require('express-async-handler');

const { Reservation } = require('../../db/models')
const router = express.Router();

// post a single reservation
router.post('/', asyncHandler(async (req, res) => {
  const confirmed = await Reservation.create(req.body);
  return res.json(confirmed)
}))

// get a user's reservations
router.get('/:id', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const resList = await Reservation.findAll({
    where: {
      userId
    }
  })
  return res.json(resList)
}))

// cancel a reservation
router.delete('/:id', asyncHandler(async (req, res) => {
  const reservationId = req.params.id;
  console.log('id in route: ', reservationId)
  const resId = await Reservation.destroy({
    where: {
      id: reservationId
    }
  })
  return res.status(200).json({ status: "ok" })
}))

module.exports = router;