// importacion de las librerias para el servidor
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuariosRoutes from "../routes/usuarios.js";
dotenv.config(); // cargar las variables de entorno desde el archivo .env
const app = express(); // crear la app de express
app.use(cors()); // usar cors
app.use(express.json()); // para que entienda json
app.use("/api", usuariosRoutes); // rutas de usuarios
//arrancar el servidor
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"));
console.log("Servidor en el puerto", app.get("port"));
