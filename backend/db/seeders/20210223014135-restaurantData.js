'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Restaurants', [
        {
          name: "La Grande Boucherie",
          description: "With a dazzling, heated outdoor dining gallery featuring 40' glass ceilings, this one-of-a-kind brasserie is built in the tradition of the Belle Epoque, inspired by elegant and ornamental Art Nouveau style. The menu features French classics and timeless bistro favorites, with a focus on prime cuts and an in-house meat program. In addition to an extensive wine list and classic cocktails, La Grande Boucherie also features an inspired menu of absinthe-driven signature drinks. Indoor dining is now also available.",
          cuisineType: "French",
          mainImageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/qL0xVe7p_s4i3H_DFWpjFA/l.jpg",
          address: "145 W 53rd St",
          city: "New York",
          state: "NY",
          phone: "(212) 510-7714"
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
