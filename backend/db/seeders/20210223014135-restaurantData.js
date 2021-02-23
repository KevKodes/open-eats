'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Restaurants', [
        {
          name: "La Grande Boucherie",
          description: "With a dazzling, heated outdoor dining gallery featuring 40' glass ceilings, this one-of-a-kind brasserie is built in the tradition of the Belle Epoque, inspired by elegant and ornamental Art Nouveau style. The menu features French classics and timeless bistro favorites, with a focus on prime cuts and an in-house meat program. In addition to an extensive wine list and classic cocktails, La Grande Boucherie also features an inspired menu of absinthe-driven signature drinks. Indoor dining is now also available.",
          cuisineType: "French",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/1/32559145.jpg",
          address: "145 W 53rd St New York, NY 10019",
          city: "New York",
          state: "NY",
          phone: "(212) 510-7714"
        },
        {
          name: "STK - NYC",
          description: "STK artfully blends two concepts into one—the modern steakhouse and a chic lounge. A large central lounge area is furnished with creamy leather banquettes and textured crocodile tiles, and is surrounded by an elevated dining room for more formal dining. Theatrical lights illuminate each table, while a DJ creates an energetic vibe throughout the entire space. STK Midtown is located in Midtown Manhattan, just steps from the bustling Theatre District. STK Midtown includes an outdoor patio and separate bar during summer months. As anticipated, steak is the main attraction. With a chic and modern mindset, STK offers small, medium and large cuts of meat, as well as naturally raised options and market fresh fish entrees. Aside from steak, signature items include Parmesan Truffle Fries; Lil’ BRGs; Crispy Lobster Tail; Sweet Corn Pudding; and Jumbo Lump Crab Salad.",
          cuisineType: "Steakhouse",
          mainImageUrl: "https://images.otstatic.com/prod1/29541197/6/large.jpg",
          address: "1114 Avenue of the Americas New York, NY 10036",
          city: "New York",
          state: "NY",
          phone: "(646) 624-2455"
        },
        {
          name: "The Smith - Nomad",
          description: "The Smith is a casual American Brasserie with four upbeat locations in New York City: The Smith East Village, The Smith Midtown, The Smith Lincoln Square and The Smith NoMad. Utilizing local products and purveyors, the breakfast, lunch, brunch and dinner menus feature a selection of familiar bistro dishes. Diners at The Smith Midtown can also choose from our hand-picked wine list and full raw seafood bar. The Smith attracts colleagues for a drink after work, business dinners, a quick bite before a movie, late night revelers, families for Sunday brunch and more.",
          cuisineType: "American",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/large/25773599.jpg",
          address: "1150 Broadway New York, NY 10001",
          city: "New York",
          state: "NY",
          phone: "(646) 625-2455"
        },
        {
          name: "Serra by Birreria",
          description: "This winter season, SERRA Stellata - In the Woods will completely embrace the bounty and diversity of the forest. With a brand-new woodland-inspired look, SERRA Stellata - In the Woods will dive deep into the wintery “bosco” (the forest), under a magical blanket of stars that promises to keep you warm even on an open air rooftop throughout the winter season. Join us to enjoy dishes made with top local produce and seasonal ingredients, an extensive cocktail menu (think: smoky and warm drinks), and an all-new star-studded ambiance.",
          cuisineType: "Italian",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/1/32519262.jpg",
          address: "200 Fifth Avenue New York, NY 10010",
          city: "New York",
          state: "NY",
          phone: "(646) 625-2455"
        },
        {
          name: "Il Gattopardo",
          description: "IL GATTOPARDO family is committed to producing top quality Southern Italian gastronomy, to the use of authentic ingredients, and to keeping the tradition of Italian culture and hospitality vibrant and passionate. Be well, keep in touch, and buon appetito! Paula and Gianfranco Sorrentino",
          cuisineType: "Italian",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/1/32434433.jpg",
          address: "13-15 W. 54th St. New York, NY 10019",
          city: "New York",
          state: "NY",
          phone: "(212) 246-0412"
        },
        {
          name: "RH Rooftop Restaurant New York",
          description: "The RH Rooftop Restaurant features an ingredient-driven menu accompanied by a curated selection of artisanal wines and craft beers. Guests dine amidst trickling fountains and pleached London plane trees.",
          cuisineType: "American",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/2/26702633.jpg",
          address: "9 9th Ave New York, NY 10014-1203",
          city: "New York",
          state: "NY",
          phone: "(212) 246-0412"
        },
        {
          name: "Ocean Prime",
          description: "Ocean Prime is a nationally acclaimed, modern American restaurant & lounge from the award-winning Cameron Mitchell Restaurants. There is a vibrant energy, stunning settings, an impressive menu of seafood & steaks, and Heated Patio making Ocean Prime the ideal place to socialize, talk business, celebrate & indulge. Made from scratch dishes showcase simple, pure & regional flavors. Our menu features appetizers, salads, seafood, steaks, family-style sides & house-made desserts from refreshing ahi tuna tartar, jumbo lump crab cakes & tender filet to creamy black truffle mac & cheese, succulent Chilean sea bass & decadent ten-layer carrot cake. Well-trained bartenders handcraft cocktails including our signature cucumber gimlet & smoking berries & bubbles.",
          cuisineType: "Seafood",
          mainImageUrl: "https://images.otstatic.com/prod/26499270/1/large.jpg",
          address: "123 West 52nd Street New York, NY 10019",
          city: "New York",
          state: "NY",
          phone: "(212) 956-1404"
        },
        {
          name: "Sinigual",
          description: "Sinigual celebrates a fusion of contemporary and native flavors of Mexico. Even the name itself is a fusion of words, meaning without equal, above the rest and unique. Sinigual artfully blends the traditional and the unexpected. A pleasing palette of colors, textures and tastes that brings to life the very essence of all that Mexico celebrates. Rich culture. Delicious cuisine. Festive gatherings of family and friends. At Sinigual, you will receive unparalleled service and taste creative interpretations of nuevo classics prepared with only the freshest and finest ingredients. Dishes are designed to satisfy and surprise. Our flour tortillas are handmade, prepared fresh throughout the day and served with our fresh salsa quemada, salsa roja and signature honey butter. We invite you on a culinary journey through Mexico's past. And it's future.",
          cuisineType: "Mexican",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/3/31664503.jpg",
          address: "640 Third Avenue New York, NY 10017",
          city: "New York",
          state: "NY",
          phone: "(212) 286-0250"
        },
        {
          name: "Benjamin Steakhouse Prime",
          description: "After ten years of continued success in the New York metro area, Benjamin Restaurant Group is proud to open its newest space, Benjamin Steakhouse Prime. Here, modern elegance is combined with traditional steakhouse classics, while also showcasing signature standouts from highly regarded sister property Benjamin Steakhouse. After perfecting both steakhouse and seafood concepts in their arsenal, Benjamin Restaurant Group is highlighting the grill at Prime, serving up USDA prime dry aged steaks and succulent seafood in unique ways. The 10,000 square foot space houses an expansive main dining room featuring wall mounted fireplaces. A temperature-controlled wine wall is exposed throughout the upper level which also offers five customizable private dining spaces for seating of up to 100+ guests.",
          cuisineType: "Steakhouse",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/4/41506986.jpg",
          address: "23 E 40th St. New York, NY 10016",
          city: "New York",
          state: "NY",
          phone: "(212) 286-0250"
        },
        {
          name: "Estiatorio Milos",
          description: "With a commitment to the freshest, most flavorful fish, flown in daily from the Greek islands and featured in its open fish market, Milos offers a dining experience based on the simplicity and sincerity of the Mediterranean diet. The restaurant's airy, elegant setting is reminiscent of the Greek islands. Founder and chef Costas Spiliadis continues the standard of excellence and hospitality he began in Montreal, where he opened the original Milos.",
          cuisineType: "Seafood",
          mainImageUrl: "https://resizer.otstatic.com/v2/photos/wide-huge/2/37968944.jpg",
          address: "125 West 55th Street New York, NY 10019",
          city: "New York",
          state: "NY",
          phone: "(212) 245-7400"
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
