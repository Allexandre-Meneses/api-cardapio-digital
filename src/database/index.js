import Sequelize from  'sequelize'

import Admins from '../app/models/Admins'

import Categoria from '../app/models/Categorias'

import Produtos from '../app/models/Produtos'

import databaseConfig from '../config/database'

const models = [Categoria, Produtos, Admins]

class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection))
          .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();