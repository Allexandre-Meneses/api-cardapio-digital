import { Router } from "express"; //importr apenas o Routers do express
import express from "express";
import cors from "cors";

import CategoriasController from "./app/controllers/CategoriasController";
import ProdutosController from "./app/controllers/ProdutosController";
import SessionController from "./app/controllers/SessionController";

import AuthMiddleware from "./app/middlewares/auth"

const routes = new Router();

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-Type', 'application/json');

    next();
});

routes.get("/", (req, res) => {
  return res.json({ mensagem: "Api Cardapio Digital" });
});

// ROTA DE SESSÃO

routes.post("/login", cors(), SessionController.store)

// ROTAS DO TIPO CATEGORIA:

routes.get("/categoria", cors(), CategoriasController.index)

// ROTAS DO TIPO PRODUTO

routes.get("/produto", cors(), ProdutosController.index)
routes.get("/produto/:id", cors(), ProdutosController.getUnico)

// TODAS AS ROTAS ABAIXO EXIGEM O TOKEN
routes.use(AuthMiddleware);

// ROTAS DO TIPO CATEGORIA

routes.post("/categoria", cors(), CategoriasController.store)

routes.put("/categoria", cors(), CategoriasController.update)

routes.delete("/categoria", cors(), CategoriasController.delete)

// ROTAS DO TIPO PRODUTO

routes.post("/produto", cors(), ProdutosController.store)

routes.put("/produto", cors(), ProdutosController.update)

routes.delete("/produto", cors(), ProdutosController.delete)


export default routes;