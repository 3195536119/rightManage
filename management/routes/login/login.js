/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-27 19:00:09
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-27 19:26:10
 */
const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const userModel = require("../../db/models/users");

router.post("/", (req, res) => {
  let { email, password } = req.body;
  userModel
    .findOne({
      where: {
        email,
      },
    })
    .then((user) => {
      console.log(`user:${user}`);
      if (!user) {
        // return res.status(400).json({ msg: "该用户不存在" });
        res.status(400).json({ msg: "该用户不存在" });
      } else {
        bcrypt.compare(password, user.password).then((result) => {
          if (result) {
            res.json({ msg: "登录成功" });
          } else {
            res.json({ msg: "密码错误" });
          }
        });
      }
    });
});

module.exports = router;
