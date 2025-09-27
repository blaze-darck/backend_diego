import { Router } from "express";
import { registrarUsuario } from "../controllers/usuarios.controller.js";

const router = Router();

router.post("/register", registrarUsuario);

export default router;
