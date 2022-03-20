import { Router } from "express"; //importr apenas o Routers do express

import CategoriasController from "./app/controllers/CategoriasController";
import ProdutosController from "./app/controllers/ProdutosController";
import SessionController from "./app/controllers/SessionController";

import AuthMiddleware from "./app/middlewares/auth"

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "Api Cardapio Digital" });
});

// ROTA DE SESSÃO

routes.post("/login", SessionController.store)

// ROTAS DO TIPO CATEGORIA:

routes.get("/categoria", CategoriasController.index)

// ROTAS DO TIPO PRODUTO

routes.get("/produto", ProdutosController.index)

// TODAS AS ROTAS ABAIXO EXIGEM O TOKEN
routes.use(AuthMiddleware);

// ROTAS DO TIPO CATEGORIA

routes.post("/categoria", CategoriasController.store)

routes.put("/categoria", CategoriasController.update)

routes.delete("/categoria", CategoriasController.delete)

// ROTAS DO TIPO PRODUTO

routes.post("/produto", ProdutosController.store)

routes.put("/produto", ProdutosController.update)

routes.delete("/produto", ProdutosController.delete)


export default routes;