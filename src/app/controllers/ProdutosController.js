import Produto from "../models/Produtos";

class produtoController {

  async index(req, res) {

    const produtos = await Produto.findAll()

    return res.json(produtos)
  }

  async store(req, res) {

    const produtoExist = await Produto.findOne({where: {name: req.body.name}})

    if (produtoExist) {
        return res.json({mensagem: "Produto já cadastrada"})
    }

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

  async update(req, res) {
    let produto = await Produto.findByPk(req.body.id)

    if (!produto) {
      return res.json({mensagem: "PRODUTO NÃO CADASTRADO"})
    }

    produto = await produto.update({
      name: req.body.name,
      description: req.body.description,
      preco: req.body.preco,
      categoria_id: req.body.categoria_id,
    })

    return res.json(produto)

  }

  async delete(req, res) {
    const produto = await Produto.findByPk(req.body.id)

    if (!produto) {
      return res.json({mensagem: "PRODUTO NÃO CADASTRADO"})
    }

    await produto.destroy()

    return res.json({mensagem: "PRODUTO EXCLUÍDO"})
    
  }
}

export default new produtoController();