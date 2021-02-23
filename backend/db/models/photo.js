'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
  };
  return Photo;
};