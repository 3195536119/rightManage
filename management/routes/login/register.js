/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-27 16:01:40
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-29 21:31:59
 */
const express = require("express");

const userModel = require("../../db/models/userModel");

const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/", (req, res) => {
  //   let body = req.body;
  //   console.log(body);
  let email = req.body.email;
  userModel
    .findOne({
      where: {
        email,
      },
    })
    .then((user) => {
      if (user) {
        res.status(409).send("邮箱已被注册" );
      } else {
        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in your password DB.
            if (err) throw err;
            password = hash;
            userModel
              .create({
                name: req.body.name,
                email: req.body.email,
                password,
                identity: req.body.identity,
              })
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    });
});

module.exports = router;
