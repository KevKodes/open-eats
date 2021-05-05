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
        },
        {
          overallRating: 4,
          foodRating: 5,
          serviceRating: 2,
          ambienceRating: 5,
          description: "The food was delicious but we had to wait over an hour to be seated. You'd think having a reservation would mean something.",
          userId: 2,
          restaurantId: 1
        },
        {
          overallRating: 4,
          foodRating: 5,
          serviceRating: 2,
          ambienceRating: 5,
          description: "The restaurant was super cute. i took my sister and her friends out to dinner and they loved it. the music was great and the food was delicious and the service was good. they took the necessary precautions and it was spacious enough to feel comfortable and safe. definitely would recommend.",
          userId: 3,
          restaurantId: 1
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "I took my g/f here for her bday, a little surprise dinner with some of her friends. The place is absolutely phenominal in terms of service and has a very unique Ambience. We were in a big group which just felt so fit for the place however i observed couples and larger groups having just as great of a time. ",
          userId: 3,
          restaurantId: 2
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 2
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 3
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 4
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 5
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 6
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 7
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 8
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 9
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "This place is amazing!",
          userId: 1,
          restaurantId: 10
        },
        {
          overallRating: 5,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 2
        },
        {
          overallRating: 4,
          foodRating: 5,
          serviceRating: 3,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 3
        },
        {
          overallRating: 5,
          foodRating: 4,
          serviceRating: 5,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 4
        },
        {
          overallRating: 5,
          foodRating: 3,
          serviceRating: 5,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 5
        },
        {
          overallRating: 4,
          foodRating: 5,
          serviceRating: 4,
          ambienceRating: 4,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 6
        },
        {
          overallRating: 4,
          foodRating: 4,
          serviceRating: 4,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 7
        },
        {
          overallRating: 3,
          foodRating: 3,
          serviceRating: 5,
          ambienceRating: 3,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 8
        },
        {
          overallRating: 5,
          foodRating: 4,
          serviceRating: 5,
          ambienceRating: 5,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 9
        },
        {
          overallRating: 4,
          foodRating: 5,
          serviceRating: 5,
          ambienceRating: 3,
          description: "My wife and I had a wonderful time. The atmosphere is amazing and the food is delicious. I would definitely recommend it!",
          userId: 2,
          restaurantId: 10
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
