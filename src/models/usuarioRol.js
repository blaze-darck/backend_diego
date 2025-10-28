const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Usuario = require("./usuarios");
const Rol = require("./rol");

const UsuarioRol = sequelize.define("UsuarioRol", {
  asignado_por: {
    type: DataTypes.STRING,
  },
  asignado_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

  // Auditoría
  created_by: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_by: {
    type: DataTypes.STRING,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Usuario.belongsToMany(Rol, {
  through: UsuarioRol,
  foreignKey: "id_usuario",
});
Rol.belongsToMany(Usuario, {
  through: UsuarioRol,
  foreignKey: "id_rol",
});

module.exports = UsuarioRol;
