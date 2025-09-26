require("dotenv").config(); // cargar las variables de entorno desde el archivo .env
const mysql = require("mysql2"); // importar la libreria de mysql
//coneccion a la base de datos con mysql y variables de entorno
async function conectionDB() {
  // funcion asincrona para conectar a la base de datos
  try {
    const coneccion = mysql.createConnection({
      // crear la coneccion a la base de datos
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Conexión a la base de datos exitosa");
    return coneccion; // retornar la coneccion a la base de datos
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}
module.exports = conectionDB; // exportar la funcion de coneccion a la base de datos
