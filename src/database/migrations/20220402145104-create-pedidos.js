"use strict";

const { password } = require("../../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pedidos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mesa: {
        type: Sequelize.INTEGER,
        references: { model: "mesas", key: "id" },
        onDelete: "CASCADE",
        allowNull: false
      },
      produto: {
        type: Sequelize.INTEGER,
        references: { model: "produtos", key: "id" },
        onDelete: "CASCADE",
        allowNull: false
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
    await queryInterface.dropTable("pedidos");
  },
};