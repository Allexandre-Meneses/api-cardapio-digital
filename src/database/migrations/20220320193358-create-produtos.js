"use strict";

const { password } = require("../../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: { model: "categorias", key: "id" },
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
    await queryInterface.dropTable("produtos");
  },
};