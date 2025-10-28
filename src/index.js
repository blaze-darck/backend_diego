require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const Usuario = require("./models/usuarios");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("API corriendo dentro de Docker"));

(async () => {
  try {
    console.log("Conectando a la base de datos...");
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Conectado y sincronizado con MySQL");

    app.listen(process.env.PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.error("Error al conectar con MySQL:", error);
  }
})();
