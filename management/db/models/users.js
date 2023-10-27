/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:59:55
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-27 17:31:46
 */
const Mysequelize = require("../db");
const { DataTypes } = require("sequelize");

const userModel = Mysequelize.define("User", {
  id: {
    //设置id默认自增
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    // defaultValue: DataTypes.UUID4,
    autoIncrement: true,
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
    defaultValue: new Date(),
  },
});

//同步模型和mysql数据库，如果没有这张表，则新建
// userModel.sync({
//   force: true,
// });
userModel.sync();

module.exports = userModel;
