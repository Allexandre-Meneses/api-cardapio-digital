import Categoria from "../models/Categorias";

class categoriaController {
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
}

export default new categoriaController();