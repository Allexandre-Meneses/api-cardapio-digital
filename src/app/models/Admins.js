import Sequelize, { Model } from "sequelize";

class Admins extends Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

      return this;

  }
}

export default Admins;