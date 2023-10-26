const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "请求成功" });
});

module.exports = router;
