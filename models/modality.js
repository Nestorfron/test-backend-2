const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Modality = sequelize.define('Modality', {
  ID_modality: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Modalitys', // Table name in the database
  timestamps: false,
});

module.exports = Modality;
