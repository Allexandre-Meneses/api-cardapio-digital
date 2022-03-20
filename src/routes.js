import { Router } from "express"; //importr apenas o Routers do express
import { route } from "express/lib/application";
import CategoriasController from "./app/controllers/CategoriasController";
import ProdutosController from "./app/controllers/ProdutosController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ mensagem: "helo world" });
});

routes.post("/categoria", CategoriasController.store)

routes.post("/produto", ProdutosController.store)

export default routes;