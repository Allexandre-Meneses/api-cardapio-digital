import Sequelize, { Model } from "sequelize";

class Categorias extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

      return this;

  }
}

export default Categorias;