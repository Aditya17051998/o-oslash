const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add valid email address",
      ],
    },
    password: {
      type: String,
      select: false
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", UserSchema);
