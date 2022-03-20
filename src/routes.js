import { Router } from "express"; //importr apenas o Routers do express
import { route } from "express/lib/application";
import CategoriasController from "./app/controllers/CategoriasController";
import ProdutosController from "./app/controllers/ProdutosController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "Api Cardapio Digital" });
});
// ROTAS DO TIPO CATEGORIA:

routes.post("/categoria", CategoriasController.store)

routes.get("/categoria", CategoriasController.index)

routes.put("/categoria", CategoriasController.update)

routes.delete("/categoria", CategoriasController.delete)

//ROTAS DO TIPO PRODUTO

routes.post("/produto", ProdutosController.store)

routes.get("/produto", ProdutosController.index)

routes.put("/produto", ProdutosController.update)

routes.delete("/produto", ProdutosController.delete)

export default routes;