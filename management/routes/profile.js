/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-28 16:06:26
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-28 20:01:31
 */
const express = require("express");

const router = express.Router();

const passport = require("passport");

const profileModel = require("../db/models/profileModel");
const userModel = require("../db/models/userModel");

router.get("/", (req, res) => {
  res.json({ msg: "请求成功" });
});

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let fields = {};
    let attributes = profileModel.getAttributes();
    Object.keys(attributes).forEach((attribute) => {
      if (req.body[attribute]) fields[attribute] = req.body[attribute];
    });
    console.log(`fields:${fields}`);
    profileModel
      .create(fields)
      .then((profile) => res.json(profile))
      .catch((err) => console.log(err));
  }
);

router.get(
  "/search",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.query);
    let query = req.query;
    profileModel
      .findAll({
        where: query,
      })
      .then((profile) => {
        if (!profile.length) {
          res.json({ msg: "未查询到数据" });
        } else {
          let results = [];
          profile.forEach((p) => {
            results.push(p.dataValues);
          });
          res.json(results);
        }
      })
      .catch((err) => console.log(err));
  }
);

router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;
    let fields = {};
    let attributes = profileModel.getAttributes();
    Object.keys(attributes).forEach((attribute) => {
      if (req.body[attribute]) fields[attribute] = req.body[attribute];
    });
    profileModel.update(fields, { where: { id } }).then((profile) => {
      if (!profile) {
        res.json({ msg: "修改失败，没有找到对应的数据" });
      } else {
        res.json({ msg: "修改成功" });
      }
    });
  }
);

router.get(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.query.id;
    profileModel.destroy({ where: { id } }).then((result) => {
      if (result) {
        res.json({ msg: "删除成功" });
      } else {
        res.json({ msg: "删除失败，没有找到对应的记录" });
      }
    });
  }
);

module.exports = router;
