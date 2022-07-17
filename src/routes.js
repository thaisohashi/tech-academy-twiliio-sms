import { Router } from "express";
import * as MessageController from "./controllers/message.controller.js";

const routes = Router();

routes.get("/", (request, response) => {
  response.send("API Tech Academy - Integração com Twilio");
});

routes.post("/message", MessageController.message);

export default routes;
