// Solo rutas del usuario
import { Router } from "express";
import * as Controller from "./controller.js"


const clienteRouter = Router();

clienteRouter.route("/").get(Controller.findAll);

export default clienteRouter;