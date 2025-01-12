const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Action = sequelize.define('Action', {
  ID_action: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  action_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  action_description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Actions', // Table name in the database
  timestamps: false,
});

module.exports = Action;
