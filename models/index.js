const { Sequelize } = require('sequelize');
require('dotenv').config();
const path = require('path');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  logging: console.log,
});

// Define models
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Book = require('./book')(sequelize, Sequelize.DataTypes);

User.hasMany(Book, { foreignKey: 'userId' });
Book.belongsTo(User, { foreignKey: 'userId' });

const db = {
  sequelize,
  Sequelize,
  User,
  Book,
};

module.exports = db;
