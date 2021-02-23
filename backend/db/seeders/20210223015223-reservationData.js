'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reservations', [
        {
          partySize: 2,
          reservationDate: "2021-03-13",
          reservationTime: "7:00 pm",
          userId: 1,
          restaurantId: 1
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reservations', null, {});
  }
};
