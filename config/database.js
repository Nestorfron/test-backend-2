// config/database.js

const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  });

module.exports = sequelize;