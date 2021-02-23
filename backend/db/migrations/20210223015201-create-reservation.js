'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partySize: {
        type: Sequelize.INTEGER
      },
      reservationDate: {
        type: Sequelize.DATE
      },
      reservationTime: {
        type: Sequelize.TIME
      },
      userId: {
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER
      },
      occasion: {
        type: Sequelize.STRING
      },
      request: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations');
  }
};