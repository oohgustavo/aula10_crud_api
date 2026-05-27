import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produto", produtoController.findAllProdutoController);
produtoRouter.post("/produto", produtoController.createProdutoController)

export default  produtoRouter; 