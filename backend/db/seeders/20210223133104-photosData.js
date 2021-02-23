'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Photos', [
        {
          imageUrl: "https://images.otstatic.com/prod1/29541988/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541988/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541987/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541986/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541956/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541955/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541951/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29541950/1/large.jpg",
          restaurantId: 2
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477890/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477889/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477888/1/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477887/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477885/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477884/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32477883/2/large.jpg",
          restaurantId: 1
        },
        {
          imageUrl: "https://resizer.otstatic.com/v2/photos/large/25671763.jpg",
          restaurantId: 3
        },
        {
          imageUrl: "https://images.otstatic.com/prod/24614407/1/large.jpg",
          restaurantId: 3
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32338373/1/large.jpg",
          restaurantId: 3
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29182720/1/large.jpg",
          restaurantId: 3
        },
        {
          imageUrl: "https://images.otstatic.com/prod/27704252/1/large.jpg",
          restaurantId: 3
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29176055/3/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod/27090998/4/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26208578/3/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26208576/3/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26208575/3/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26208574/2/large.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://resizer.otstatic.com/v2/photos/large/1/25352559.jpg",
          restaurantId: 4
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29192141/3/large.jpg",
          restaurantId: 5
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29192136/3/large.jpg",
          restaurantId: 5
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29192134/3/large.jpg",
          restaurantId: 5
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29192133/3/large.jpg",
          restaurantId: 5
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29192182/3/large.jpg",
          restaurantId: 5
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26702632/2/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26702631/2/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod/26702629/2/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41691127/1/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41683765/1/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41683761/1/large.jpg",
          restaurantId: 6
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41242766/1/large.jpg",
          restaurantId: 7
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/33989492/1/large.jpg",
          restaurantId: 7
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/29731194/1/large.jpg",
          restaurantId: 7
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/33989491/1/large.jpg",
          restaurantId: 7
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32698243/1/large.jpg",
          restaurantId: 7
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/31664510/4/large.jpg",
          restaurantId: 8
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/31664545/4/large.jpg",
          restaurantId: 8
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/31664541/4/large.jpg",
          restaurantId: 8
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/31664540/4/large.jpg",
          restaurantId: 8
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/31664536/4/large.jpg",
          restaurantId: 8
        },
        {
          imageUrl: "https://images.otstatic.com/prod/24958808/1/large.jpg",
          restaurantId: 9
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32681853/4/large.jpg",
          restaurantId: 9
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32681861/4/large.jpg",
          restaurantId: 9
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32681859/4/large.jpg",
          restaurantId: 9
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/32681855/4/large.jpg",
          restaurantId: 9
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/30702561/3/large.png",
          restaurantId: 10
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41274567/4/large.png",
          restaurantId: 10
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/41274544/2/large.png",
          restaurantId: 10
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/30702553/3/large.png",
          restaurantId: 10
        },
        {
          imageUrl: "https://images.otstatic.com/prod1/30702548/3/large.png",
          restaurantId: 10
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Photos', null, {});
  }
};
