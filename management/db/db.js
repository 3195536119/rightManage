/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:04:56
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-27 16:58:49
 */
const mysql = require("mysql2");

const { Sequelize } = require("sequelize");

//注意这里数据库的坑，在navicat中新建了一个连接之后，需要在该连接下新建同名的数据库才能成功
const Mysequelize = new Sequelize("management", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//测试是否能连接成功
Mysequelize.authenticate()
  .then(() => {
    console.log("connection");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = Mysequelize;
