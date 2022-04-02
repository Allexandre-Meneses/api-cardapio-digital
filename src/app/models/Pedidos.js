import Sequelize, { Model } from "sequelize";

class Pedidos extends Model {
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
  static associate(models){
      this.belongsTo(models.Mesas, {foreignKey: "mesa", as: "mesas"})
      this.belongsTo(models.Produtos, {foreignKey: "produto", as: "produtos"});
  }
}

export default Pedidos;