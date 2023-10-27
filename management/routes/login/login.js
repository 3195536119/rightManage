/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-27 19:00:09
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-27 22:09:20
 */
const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const userModel = require("../../db/models/userModel");

const { tokenConfig } = require("../../config/config");

const passport = require("passport");

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
            let rule = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
              identity: user.identity,
            };
            jwt.sign(
              rule,
              tokenConfig.PRIVITE_KEY,
              { expiresIn: tokenConfig.EXPIRESD },
              (err, token) => {
                if (err) throw err;
                res.json({
                  msg: "登录成功",
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            res.json({ msg: "密码错误" });
          }
        });
      }
    });
});

//测试该接口，在测试的软件中header添加Authorization字段，值为token值
router.get(
  "/checkToken",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json(req.user);
    const { id, name, email, avatar, identity } = req.user;
    res.json({
      id,
      name,
      email,
      avatar,
      identity,
    });
  }
);

module.exports = router;
