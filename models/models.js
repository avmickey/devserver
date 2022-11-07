const sequelize = require('../bd');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  number: { type: DataTypes.STRING, unique: true },
  login: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

module.exports = {
  User,
};
