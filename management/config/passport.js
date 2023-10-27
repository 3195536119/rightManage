/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-27 21:18:56
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-27 22:10:04
 */
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};

const MySequelize = require("../db/db");
//与下面的UserModel二者定义其一即可
const userModel = MySequelize.models.User;

const { tokenConfig } = require("../config/config");
// const userModel = require("../db/models/userModel");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = tokenConfig.PRIVITE_KEY;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
      console.log(MySequelize.models.User);
      userModel
        .findOne({
          where: {
            id: jwt_payload.id,
          },
        })
        .then((user) => {
          if (user) {
            //中间件，将数据传入到接下来的接口中
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );
};
