'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    partySize: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE,
    reservationTime: DataTypes.TIME,
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    occasion: DataTypes.STRING,
    request: DataTypes.STRING
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};