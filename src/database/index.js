import Sequelize from  'sequelize'

import Categoria from '../app/models/Categorias'

import Produtos from '../app/models/Produtos'

import Admins from '../app/models/Admins'

import Pedidos from '../app/models/Pedidos'

import Mesas from '../app/models/Mesas'

import databaseConfig from '../config/database'

const models = [Categoria, Produtos, Admins, Pedidos, Mesas]

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