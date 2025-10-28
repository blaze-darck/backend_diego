const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Persona = require("./persona");

const Usuario = sequelize.define("Usuario", {
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
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

Usuario.belongsTo(Persona, { foreignKey: "id_persona" });
Persona.hasOne(Usuario, { foreignKey: "id_persona" });

module.exports = Usuario;
