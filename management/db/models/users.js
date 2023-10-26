/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-10-26 20:59:55
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-26 21:34:57
 */
const Mysequelize = require("../db");
const { DataTypes } = require("sequelize");

const userModel = Mysequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
});

module.exports = userModel;
