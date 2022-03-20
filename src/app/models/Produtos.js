import Sequelize, { Model } from "sequelize";

class Produtos extends Model {
  static associate(models) {
      Produtos.belongsTo(models.Categorias, {
          foreignKey: 'categoria_id',
          onDelete: 'CASCADE'
      })
  }
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        preco: Sequelize.FLOAT,
        categoria_id: Sequelize.INTEGER
      },
      {
        sequelize,
      }
    );

      return this;

  }
}

export default Produtos;