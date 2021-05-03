'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      overallRating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
      foodRating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
      serviceRating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
      ambienceRating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" }
      },
      restaurantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Restaurants", key: "id" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};