'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 1
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
