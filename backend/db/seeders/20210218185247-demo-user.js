'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        id: 2,
        email: faker.internet.email(),
        firstName: 'John',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        id: 3,
        email: faker.internet.email(),
        firstName: 'Jane',
        lastName: 'Doe',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};