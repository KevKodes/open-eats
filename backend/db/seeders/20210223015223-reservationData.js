'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reservations', [
        {
          partySize: 2,
          reservationDate: new Date(2021, 03, 13),
          reservationTime: "7:00 pm",
          userId: 1,
          restaurantId: 1
        },
        {
          partySize: 2,
          reservationDate: new Date(2021, 03, 09),
          reservationTime: "8:00 pm",
          userId: 1,
          restaurantId: 2
        },
        {
          partySize: 7,
          reservationDate: new Date(2021, 02, 17),
          reservationTime: "5:30 pm",
          userId: 1,
          restaurantId: 3
        },
        {
          partySize: 13,
          reservationDate: new Date(2020, 12, 24),
          reservationTime: "6:00 pm",
          userId: 1,
          restaurantId: 3
        },
        {
          partySize: 4,
          reservationDate: new Date(2021, 02, 17),
          reservationTime: "1:00 pm",
          userId: 1,
          restaurantId: 3
        },
        {
          partySize: 2,
          reservationDate: new Date(2021, 04, 21),
          reservationTime: "8:00 pm",
          userId: 1,
          restaurantId: 3
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reservations', null, {});
  }
};
