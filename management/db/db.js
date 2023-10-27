/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:04:56
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-26 21:13:52
 */
const mysql = require("mysql");

const { Sequelize } = require("sequelize");

const Mysequelize = new Sequelize("right", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = Mysequelize;
