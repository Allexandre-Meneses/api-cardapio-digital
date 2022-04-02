"use strict";

const { password } = require("../../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mesas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("mesas");
  },
};