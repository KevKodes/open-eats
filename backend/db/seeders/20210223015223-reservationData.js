'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reservations', [
        {
          partySize: 2,
          reservationDate: "Tue Apr 13 2021",
          reservationTime: "7:00 pm",
          userId: 1,
          restaurantId: 1
        },
        {
          partySize: 2,
          reservationDate: "Fri Apr 09 2021",
          reservationTime: "8:00 pm",
          userId: 1,
          restaurantId: 2
        },
        {
          partySize: 7,
          reservationDate: "Wed Mar 17 2021",
          reservationTime: "5:30 pm",
          userId: 1,
          restaurantId: 3
        },
        {
          partySize: 13,
          reservationDate: "Thu Dec 24 2020",
          reservationTime: "6:00 pm",
          userId: 1,
          restaurantId: 4
        },
        {
          partySize: 4,
          reservationDate: "Wed Feb 17 2021",
          reservationTime: "1:00 pm",
          userId: 1,
          restaurantId: 5
        },
        {
          partySize: 2,
          reservationDate: "Wed Apr 21 2021",
          reservationTime: "8:00 pm",
          userId: 1,
          restaurantId: 6
        },
        {
          partySize: 2,
          reservationDate: "Tue Jan 12 2021",
          reservationTime: "8:30 pm",
          userId: 1,
          restaurantId: 7
        },
        {
          partySize: 2,
          reservationDate: "Fri Nov 13 2020",
          reservationTime: "7:00 pm",
          userId: 1,
          restaurantId: 8
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reservations', null, {});
  }
};
