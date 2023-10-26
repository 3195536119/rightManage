/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-10-26 20:40:38
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-26 20:43:03
 */
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("请求成功");
});

module.exports = router;
