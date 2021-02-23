'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    description: DataTypes.STRING(10000),
    cuisineType: DataTypes.STRING(30),
    mainImageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(15),
    },
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Reservation, { foreignKey: 'restaurantId' });
  };
  return Restaurant;
};