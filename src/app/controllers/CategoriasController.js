import Categoria from "../models/Categorias";

class categoriaController {

  async index(req, res) {

    const categorias = await Categoria.findAll()

    return res.json(categorias)

  }
  async store(req, res) {

    const categoriaExist = await Categoria.findOne({where: {name: req.body.name}})

    if (categoriaExist) {
        return res.json({mensagem: "Categoria já cadastrada"})
    }

    const {id, name} = await Categoria.create(
      req.body
    );

    return res.json({id, name});

  }

  async update(req, res) {

    let categoria = await Categoria.findByPk(req.body.id)

    if (!categoria) {
      return res.json({mensagem: "CATEGORIA NÃO CADASTRADA"})
    }

    categoria = await categoria.update({
      name: req.body.name
    })

    return res.json(categoria)
    
  }

  async delete(req, res) {
    const categoria = await Categoria.findByPk(req.body.id)

    if(!categoria) {
      return res.json({mensagem: "CATEGORIA NÃO CADASTRADA"})
    }

    await categoria.destroy()

    return res.json({mensagem: "CATEGORIA EXCLUÍDA"})
  }
}

export default new categoriaController();