// Solo rutas del usuario
import { Router } from "express";
import * as Controller from "./controller.js"


const welcomeRouter = Router();

welcomeRouter.route("/").get(Controller.show);

export default welcomeRouter;