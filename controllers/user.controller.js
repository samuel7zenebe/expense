const { jwt } = require("jsonwebtoken");
const bcrybt = require("bcrypt");
const userModel = require("../models/user.model");

async function registerUser(req, res, next) {
  let { userName, password } = req.body;
  try {
    if (!userName || !password) {
      throw new Error("creddentails are empty.");
    }
    // check if an userName is already existing in a database ? if it is respond with 409 response code,,,
    const user = await userModel.findOne({
      userName,
    });
    if (user.userName) {
      throw new Error("user exists.");
    }
    bcrybt.genSalt(10, function (err, salt) {
      if (err) throw new Error("Generating salt error");
      bcrybt.hash(password, salt, async function (err, hash) {
        if (err) throw new Error("Error hashing password....", err);
        console.log(password + "=>", hash);
        const newUser = await userModel.insertOne({
          userName,
          password: hash,
        });
        // store the hashed  password ans username in a database ...

        res.send({
          userName,
          password,
          message: "Succesfully registered",
          hashedPassword: hash,
        });
      });
    });
  } catch (err) {
    res.send({
     err
    });
  }
}

async function loginUser(req, res) {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.send({
      error: true,
      message: "No Credentails are provided.",
    });
    return;
  }

  try {
    const user = await userModel.findOne({
      userName: userName,
    });
    bcrybt.compare(password, user.password).then((value) => {
      console.log(value);
      if (!value) {
        res.send({
          error: true,
          message: "Unmatched password.",
        });
        return;
      }
    });
    res.send({
      message: "logged in succesfully",
    });
  } catch (err) {
    res.send({
      error: true,
      message: err,
    });
  }
}

async function allUsers(req, res) {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (err) {
    res.send({
      error: true,
      message: err,
    });
  }
}

module.exports = { loginUser, registerUser, allUsers };
