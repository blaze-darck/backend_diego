const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Persona = sequelize.define("Persona", {
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_patermo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_materno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },

  // Campos de auditoría
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

module.exports = Persona;
