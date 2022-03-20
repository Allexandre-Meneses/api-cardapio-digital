import Produto from "../models/Produtos";

class produtoController {
  async store(req, res) {

    /*const produtoExist = await Produto.findOne({where: {name: req.body.name}})

    if (produtoExist) {
        return res.json({mensagem: "Produto já cadastrada"})
    }*/

    const {name, description, preco, categoria_id} = req.body

    const produto = await Produto.create(
      {
        name: name,
        description: description,
        preco: preco,
        categoria_id: categoria_id
      }
    );

    return res.json(produto);
  }
}

export default new produtoController();