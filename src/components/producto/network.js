// Solo rutas del usuario
import { Router } from "express";
import * as Controller from "./controller.js"


const productoRouter = Router();

productoRouter.route("/").get(Controller.findAll);

export default productoRouter;