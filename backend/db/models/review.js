'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    overallRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foodRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ambienceRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000)
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' });
  };
  return Review;
};