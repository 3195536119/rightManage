/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-10-28 15:53:23
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-28 16:10:41
 */
const MySequelize = require("../db");
const { DataTypes } = require("sequelize");

const profileModel = MySequelize.define("Profile", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createTime: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  type: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.STRING,
  },
  incomes: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  expenditures: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  cash: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  remark: {
    type: DataTypes.STRING,
  },
});

profileModel.sync();

module.exports = profileModel;
