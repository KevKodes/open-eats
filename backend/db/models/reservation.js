'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    partySize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reservationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reservationTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    occasion: DataTypes.STRING(255),
    request: DataTypes.STRING(255)
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, { foreignKey: 'userId' });
    Reservation.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' });
  };
  return Reservation;
};