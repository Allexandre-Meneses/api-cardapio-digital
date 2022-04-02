import Sequelize, { Model } from "sequelize";

class Mesas extends Model {
  static init(sequelize) {
    super.init(
      {
      },
      {
        sequelize,
      }
    );

      return this;

  }
}

export default Mesas;