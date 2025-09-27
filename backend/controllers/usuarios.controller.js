import connectionDB from "../config/data_base.js"; //llamado a la coneccion a la base de datos
import bcrypt from "bcrypt"; //libreria para encriptar contraseñas

//funcion para registrar usuario
export async function registrarUsuario(req, res) {
  console.log("datos recibidos:", req.body);
  const {
    nombreCompleto,
    correo,
    username,
    password,
    confirmarPassword,
    telefono,
    genero,
  } = req.body;

  if (
    !nombreCompleto ||
    !correo ||
    !username ||
    !password ||
    !confirmarPassword ||
    !telefono ||
    !genero
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  if (password !== confirmarPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }

  try {
    const db = await connectionDB();

    // Cambié id por id_usuario y username por usuario
    const [existe] = await db.execute(
      "SELECT id_usuario FROM usuarios WHERE correo = ? OR usuario = ?",
      [correo, username]
    );

    if (existe.length > 0) {
      return res
        .status(409)
        .json({ message: "El correo o nombre de usuario ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute(
      "INSERT INTO usuarios (nombre, correo, usuario, contraseña, telefono, genero) VALUES (?, ?, ?, ?, ?, ?)",
      [nombreCompleto, correo, username, hashedPassword, telefono, genero]
    );

    return res
      .status(201)
      .json({ message: "Usuario registrado correctamente" });
    console.log("Usuario registrado:", username);
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
}
