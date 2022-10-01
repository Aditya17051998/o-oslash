const User = require("../model/User");
const jwt = require("jsonwebtoken");


exports.register = async (req, res, next) => {
  console.log(req.body);
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(200).json({
        message: "User already exist",
      });
    }
    const user = await User.create(req.body);

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      message: `${err}`,
    });
  }
};

exports.login = async function (req, res) {
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  try {
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    } else {
      const isMatch = user.password === req.body.password;

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid password",
        });
      } 

      return res.status(200).json({
        message: "Sign in successful, here is your token",
        success: true,
        data: {
          token: jwt.sign(user.toJSON(), "aditya"),
        },
      });
    }
  } catch (err) {
    console.log("server Error", err);
    return res.status(500).json({
      message: err,
    });
  }
};
